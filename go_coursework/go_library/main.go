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

type Page struct {
	Books []Book
}

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

// global database
var db *sql.DB
var p = Page{Books: []Book{}}

// First we initialize a session store calling NewCookieStore() and passing a secret key used to authenticate the session
var store = sessions.NewCookieStore([]byte("password123"))

// verifyDatabase() checks DB connectivity then calls next HandlerFunc upon connectivity
func verifyDatabase(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	if err := db.Ping(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	next(w, r)
}

func getBookCollection(sortCol string, w http.ResponseWriter) bool {
	// accepts known sortCol OR defaults to "pk"
	if sortCol != "title" && sortCol != "author" && sortCol != "classification" {
		sortCol = "pk"
	}

	// queries book DB columns and stores each row sorted by the sortCol
	rows, err := db.Query("SELECT pk, title, author, classification FROM books order by " + sortCol)

	// clears book object
	p.Books = []Book{}

	// scans and stores data returned from DB query
	var b Book
	for rows.Next() {
		rows.Scan(&b.PK, &b.Title, &b.Author, &b.Classification)
		p.Books = append(p.Books, b)
	}

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return false
	}

	fmt.Println("P in FUNC  ", p)
	return true
}

func session(w http.ResponseWriter, r *http.Request, vk string, v string) {
	// Get a session. We're ignoring the error resulted from decoding an
	// existing session: Get() always returns a session, even if empty.
	var session, _ = store.Get(r, "go_library")
	// Set some session values.
	session.Values[vk] = v
	// Save it before we write to the response/return from the handler.
	session.Save(r, w)
}

func main() {
	// "sqlite3" driver to connect to "dev.db" database
	db, _ = sql.Open("sqlite3", "dev.db")

	// replaces default ServeMux with Gorilla/Mux Router
	mux := gmux.NewRouter()

	mux.HandleFunc("/books", func(w http.ResponseWriter, r *http.Request) {
		// Set some session values.
		columnName := r.FormValue("sortBy")

		session(w, r, "sortBy", columnName)

		getBookCollection(columnName, w)
		if err := json.NewEncoder(w).Encode(p.Books); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

	}).Methods("GET")

	// HandleFunc() registers the handler function for requests on "/"
	// w => The HTTP handler uses ResponseWriter interface to construct an HTTP response
	// r => The HTTP request received by the server or to be sent by a client
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// sets cookies
		expiration := time.Now().Add(365 * 24 * time.Hour)
		cookie := http.Cookie{Name: "username", Value: "astaxie", Expires: expiration}
		http.SetCookie(w, &cookie)

		// if  sortBy != nil {
		//      sortColumn := hi.Values["sortBy"].(string)
		// }

		columnName := r.FormValue("sortBy")

		// validates query value to prevent SQL injection
		if columnName != "title" && columnName != "author" && columnName != "classification" {
			http.Error(w, "Invalid Column Name", http.StatusBadRequest)
		}

		// sets sort value to sort value stored in session
		sortBy, _ := store.Get(r, "go_library")
		sortColumn := sortBy.Values["sortBy"].(string)
		// Set some session values.

		// queries book DB using column names and iterates over output rows.
		// scans each row and appends output row text to the DOM
		// getBookCollection(sortColumn, w)

		if !getBookCollection(sortColumn, w) {
			return
		}

		// loads template with default options and caches parsed template after initial call
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
	n.Use(negroni.HandlerFunc(verifyDatabase))
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
