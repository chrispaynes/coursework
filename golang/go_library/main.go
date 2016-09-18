package main

import (
	"database/sql"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"github.com/codegangsta/negroni"
	gmux "github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	_ "github.com/mattn/go-sqlite3"
	"github.com/yosssi/ace"
	"io/ioutil"
	"net/http"
	"net/url"
	"time"
)

type Book struct {
	PK             int    `db:"pk"`
	Title          string `db:"title"`
	Author         string `db:"author"`
	Classification string `db:"classification"`
}

// A Page represents a book collection.
// Filter specifies which books remain visible
type Page struct {
	Books  []Book
	Filter string
}

// A SearchResult represents a result returned from a book-related search query.
type SearchResult struct {
	Title  string `xml:"title,attr"`
	Author string `xml:"author,attr"`
	Year   string `xml:"hyr,attr"`
	ID     string `xml:"owi,attr"`
}

type ClassifySearchResponse struct {
	Results []SearchResult `xml:"works>work"`
}

// nested structs to parse XML node hierarchy
type ClassifyBookResponse struct {
	BookData struct {
		Title  string `xml:"title,attr"`
		Author string `xml:"author,attr"`
		ID     string `xml:"owi,attr"`
	} `xml:"work"`
	Classification struct {
		MostPopular string `xml:"sfa,attr"`
	} `xml:"recommendations>ddc>mostPopular"`
}

// Db stores a global sqlite3 database.
var db *sql.DB

// P represents the global DOM page
var p = Page{Books: []Book{}, Filter: ""}

// Store initializes a session store with a secret authentication key.
var store = sessions.NewCookieStore([]byte("password123"))

// PingDB checks DB connectivity then calls next HandlerFunc upon connectivity.
func pingDB(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	if err := db.Ping(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	next(w, r)
}

func getBookCollection(sort string, filter string, w http.ResponseWriter, r *http.Request) bool {
	// Defaults sorting to "pk" when sort is empty.
	if sort == "" {
		sort = "pk"
	}

	// Where stores SQL WHERE clauses, or defaults to no clause.
	var where string
	if filter == "fiction" {
		where = " where classification between '800' and '900' "
	} else if filter == "nonfiction" {
		where = " where classification not between '800' and '900' "
	} else {
		where = " "
	}

	// Rows stores every row returned from book database query.
	// The data is filtered using a WHERE clause and then sorted by the sort name.
	rows, err := db.Query("SELECT pk, title, author, classification FROM books" + where + "order by " + sort)

	// p.books empties the book object.
	p.Books = []Book{}
	p.Filter = getSessionString(r, "filter")

	var b Book
	// Rows.Next scans and stores data returned from the DB query,
	// then appends each row to p.Books.
	for rows.Next() {
		rows.Scan(&b.PK, &b.Title, &b.Author, &b.Classification)
		p.Books = append(p.Books, b)
	}

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return false
	}

	return true
}

// Session gets a pre-existing session or creates a new session stores.
// The "k" and "v" arguments set a key/value pair in the store
// before saving the session and writing a request and response.
func session(w http.ResponseWriter, r *http.Request, k string, v string) {
	var s, _ = store.Get(r, "go_library")
	s.Values[k] = v
	s.Save(r, w)
	fmt.Println("session", s)
}

// GetSessionString returns a value from the session store in string format
func getSessionString(r *http.Request, key string) string {
	var strVal string
	var s, _ = store.Get(r, "go_library")
	if val := s.Values[key]; val != nil {
		strVal = val.(string)
	}
	return strVal
}

func main() {
	// DB opens a sqlite3 connection to the database.
	db, _ = sql.Open("sqlite3", "dev.db")

	// Mux replaces the default ServeMux with Gorilla/Mux Router.
	mux := gmux.NewRouter()

	// Mux.HandleFunc("/login") handles user authentication
	mux.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		// Redirects user to main page upon successful authentication
		if r.FormValue("register") != "" || r.FormValue("login") != "" {
			http.Redirect(w, r, "/", http.StatusFound)
			return
		}

		// Template stores and caches an Ace Template loaded.
		template, err := ace.Load("templates/login", "", nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// writes HTTP response using template and displays p or error
		if err := template.Execute(w, nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	mux.HandleFunc("/books", func(w http.ResponseWriter, r *http.Request) {

		// Sb stores user's "sortBy" preference then validates the query value
		// to prevent SQL injection before storing it to the session.
		sb := r.FormValue("sortBy")
		if sb != "title" && sb != "author" && sb != "classification" {
			http.Error(w, "Invalid Column Name", http.StatusBadRequest)
			return
		}

		// Session stores the current URL's query's key value into the store.
		session(w, r, "sortBy", sb)

		// GetBookCollection returns a sorted book collection, then encodes it in JSON.
		getBookCollection(getSessionString(r, "sortBy"), getSessionString(r, "filter"), w, r)
		if err := json.NewEncoder(w).Encode(p.Books); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// Methods.Queries matches for "?key=" URL queries
		// that match the regexp patter for "key=value1, key=value2, key=valueN".
	}).Methods("GET").Queries("sortBy", "{sortBy:title|author|classification}")

	mux.HandleFunc("/books", func(w http.ResponseWriter, r *http.Request) {

		// Session stores the current URL's query's key value into the store.
		session(w, r, "filter", r.FormValue("filter"))

		// GetBookCollection returns a sorted book collection, then encodes it in JSON.
		getBookCollection(getSessionString(r, "sortBy"), getSessionString(r, "filter"), w, r)

		if err := json.NewEncoder(w).Encode(p.Books); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// Methods.Queries matches for "?key=" URL queries
		// that match the regexp patter for "key=value1, key=value2, key=valueN".
	}).Methods("GET").Queries("filter", "{filter:all|fiction|nonfiction}")

	// Mux.HandleFunc("/") registers a handler function for requests on "/"
	// http.ResponseWriter writes an HTTP response
	// http.Request receives an HTTP server request or a client request
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// sets cookie expiration date and user info
		expiration := time.Now().Add(365 * 24 * time.Hour)
		cookie := http.Cookie{Name: "username", Value: "gopher", Expires: expiration}
		http.SetCookie(w, &cookie)

		// sets sort value to sort value stored in session
		// sortBy, _ := store.Get(r, "go_library")
		// sortColumn := sortBy.Values["sortBy"].(string)

		getBookCollection(getSessionString(r, "sortBy"), getSessionString(r, "filter"), w, r)

		// Template stores and caches an Ace Template loaded.
		template, err := ace.Load("templates/index", "", nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// writes HTTP response using template and displays p or error
		if err := template.Execute(w, p); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}).Methods("GET")

	// HandleFunc() registers handler function for requests on "/search"
	mux.HandleFunc("/search", func(w http.ResponseWriter, r *http.Request) {
		var results []SearchResult
		var err error

		// queries OCLC Book API using searchbar text or writes HTTP error
		if results, err = search(r.FormValue("search")); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// encodes SearchResult data into JSON format
		encoder := json.NewEncoder(w)
		// writes output to the response?
		if err := encoder.Encode(results); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}).Methods("POST")

	// saves search results with URL of /books/add uses find() to search
	// OCLC Book API for a book's OCLC Work Identifier (OWI)
	mux.HandleFunc("/books", func(w http.ResponseWriter, r *http.Request) {
		var book ClassifyBookResponse
		var err error

		// finds a book using the id extracted from the requested URL's query string id value
		if book, err = find(r.FormValue("id")); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// performs external OS command to insert a book into the DB
		// passes nil for the primary key to allow DB to auto increment
		result, err := db.Exec("insert into books (pk, title, author, id, classification) values(?, ?, ?, ?, ?)",
			nil, book.BookData.Title, book.BookData.Author, book.BookData.ID,
			book.Classification.MostPopular)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// the lastest book inserted in the DB
		pk, _ := result.LastInsertId()
		b := Book{
			PK:             int(pk),
			Title:          book.BookData.Title,
			Author:         book.BookData.Author,
			Classification: book.Classification.MostPopular,
		}

		// returns JSON encoded book in http response
		if err := json.NewEncoder(w).Encode(b); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}).Methods("PUT")

	mux.HandleFunc("/books/{pk}", func(w http.ResponseWriter, r *http.Request) {
		// performs external OS command to delete a DB book
		// based on query string's "pk" value
		if _, err := db.Exec("DELETE from books WHERE pk = ?", gmux.Vars(r)["pk"]); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		// writes 200 status on success
		w.WriteHeader(http.StatusOK)
	}).Methods("DELETE")

	// store Negroni object with default middleware for
	// Panic Recovery, Logging and Static File Serving
	n := negroni.Classic()

	// add DB verification to middleware stack
	n.Use(negroni.HandlerFunc(pingDB))
	// n.Use(negroni.HandlerFunc(session))

	// create new session
	// var store = sessions.NewCookieStore([]byte("password123"))
	// n.Use(negroni.HandlerFunc(gsession.NewCookieStore([]byte("password123"))))

	// PLACE ROUTER AT END OF MIDDLEWARE PIPELINE
	// Negroni use Gmux Router
	n.UseHandler(mux)

	// start paort 8080 webserver
	n.Run(":8080")
}

// searches OCLC Book API and returns a book's OCLC Work Identifier (OWI) ID
func find(id string) (ClassifyBookResponse, error) {
	var c ClassifyBookResponse

	// escapes query string id for proper HTTP request
	body, err := classifyAPI("http://classify.oclc.org/classify2/Classify?&summary=true&owi=" + url.QueryEscape(id))

	// returns empty ClassifyBookResponse struct and error
	if err != nil {
		return ClassifyBookResponse{}, err
	}

	// transforms book object into ClassifyBookResponse object
	err = xml.Unmarshal(body, &c)

	return c, err
}

// search() uses search query string to return search results list
// after sending HTTP request to OCLC Book API
func search(query string) ([]SearchResult, error) {
	var c ClassifySearchResponse

	// escapes query string query for proper HTTP request
	body, err := classifyAPI("http://classify.oclc.org/classify2/Classify?&summary=true&title=" + url.QueryEscape(query))

	if err != nil {
		return []SearchResult{}, err
	}

	// Parses XML data and stores result in ClassifySearchResponse
	// object using reflection
	err = xml.Unmarshal(body, &c)

	return c.Results, err
}

// sends HTTP request to OCLC Book API amd returns byte slice
func classifyAPI(url string) ([]byte, error) {
	var resp *http.Response
	var err error

	// queries book collection titles and returns books with a title
	// matching the search query, or returns empty []byte{} and error
	if resp, err = http.Get(url); err != nil {
		return []byte{}, err
	}

	// closes response body at end of the func
	defer resp.Body.Close()

	// reads and returns all bytes in response body (until an error or EOF)
	return ioutil.ReadAll(resp.Body)
}
