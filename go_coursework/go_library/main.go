package main

import (
	"database/sql"
	"encoding/json"
	"encoding/xml"
	"fmt"
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

func main() {
	// Creates new template and parses the template or panics upon error
	// Must wraps a function call returning (*Template, error)
	templates := template.Must(template.ParseFiles("templates/index.html"))

	// uses "sqlite3" driver to open connection to "dev.db" database
	db, _ := sql.Open("sqlite3", "dev.db")

	// HandleFunc registers the handler function for webserver requests on "/"
	// w => The HTTP handler uses ResponseWriter interface to construct an HTTP response
	// r => The HTTP request received by the server or to be sent by a client
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
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

	http.HandleFunc("/search", func(w http.ResponseWriter, r *http.Request) {
		// outputs results
		var results []SearchResult
		var err error

		// searches results using text from searchbar or writes HTTP error
		if results, err = search(r.FormValue("search")); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		// encodes SearchResult data into JSON format
		encoder := json.NewEncoder(w)
		// writes output to the response?
		if err := encoder.Encode(results); err != nil {
			// writes
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// starts webserver to listen and serve content on localhost 8080
	fmt.Println(http.ListenAndServe(":8080", nil))
}

// takes search query string and returns list of search results by
// sending HTTP request to OCLC Book API
func search(query string) ([]SearchResult, error) {
	var resp *http.Response
	var err error

	// queries book collection titles and returns books with a title
	// matching the search query, else returns empty search results and error
	// url.QueryEscape() escapes query string for proper HTTP request
	if resp, err = http.Get("http://classify.oclc.org/classify2/Classify?&summary=true&title=" + url.QueryEscape(query)); err != nil {
		return []SearchResult{}, err
	}

	// closes response body at end of the func
	// reads the response with io util readALL or return error
	// ReadAll reads all butes (until an error or EOF) and
	// returns the data it read within SearchResult{}
	defer resp.Body.Close()
	var body []byte
	if body, err = ioutil.ReadAll(resp.Body); err != nil {
		return []SearchResult{}, err
	}

	// Unmarshal parses the XML-encoded data and uses reflection
	// to store the result in the value pointed to
	var c ClassifySearchResponse
	err = xml.Unmarshal(body, &c)

	//return search results or last error
	return c.Results, err

}
