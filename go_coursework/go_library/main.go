package main

import (
	"database/sql"
	"encoding/json"
	"encoding/xml"
	"github.com/codegangsta/negroni"
	_ "github.com/mattn/go-sqlite3"
	"html/template"
	"io/ioutil"
	"net/http"
	"net/url"
)

type Page struct {
	Name     string
	DBStatus bool
}

// text from user search results
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

// global db that allows middleware access
var db *sql.DB

// verifyDatabase() middleware pings DB to check connectivity
// then calls HandlerFunc upon connectivity
func verifyDatabase(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
	if err := db.Ping(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	next(w, r)
}

func main() {
	// Creates new template and parses the template or panics upon error
	// Must wraps a function call returning (*Template, error)
	templates := template.Must(template.ParseFiles("templates/index.html"))

	// uses "sqlite3" driver to open connection to "dev.db" database
	db, _ = sql.Open("sqlite3", "dev.db")

	// mux replaces default ServeMux
	mux := http.NewServeMux()

	// HandleFunc() registers the handler function for requests on "/"
	// w => The HTTP handler uses ResponseWriter interface to construct an HTTP response
	// r => The HTTP request received by the server or to be sent by a client
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		p := Page{Name: "GopherCon 2017"}

		// uses FormValue and a "key" string to return the URL's query value
		// or returns p if the key's value is empty
		if name := r.FormValue("name"); name != "" {
			p.Name = name
		}
		// Pings db to verify connectivity and attempts to reconnect
		// on connection loss or returns error if it cannot connect to db
		p.DBStatus = db.Ping() == nil

		// w constructs an HTTP response using the "index.html" template to display
		// template's query parameter, p OR uses err.Error() to write a HTTP error status code
		if err := templates.ExecuteTemplate(w, "index.html", p); err != nil {
			// takes error and returns error with internal server error
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

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
	})

	// saves search results with URL of /books/add uses find() to search
	// OCLC Book API for a book's OCLC Work Identifier (OWI)
	mux.HandleFunc("/books/add", func(w http.ResponseWriter, r *http.Request) {
		var book ClassifyBookResponse
		var err error

		// finds a book using the id extracted from the requested URL's query string id value
		if book, err = find(r.FormValue("id")); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// performs external OS command to insert a book into the DB
		// passes nil for the primary key to allow DB to auto increment
		_, err = db.Exec("insert into books (pk, title, author, id, classification) values(?, ?, ?, ?, ?)",
			nil, book.BookData.Title, book.BookData.Author, book.BookData.ID,
			book.Classification.MostPopular)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// stores Negroni object
	n := negroni.Classic()
	// instructs Negroni to use new mux
	n.UseHandler(mux)
	n.Use(negroni.HandlerFunc(verifyDatabase))

	// starts webserver to listen and serve content on localhost 8080
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
