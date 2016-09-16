package main

import (
	// "html/template"
	"fmt"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	// the FileServer creates a handler that serves files from the "/public" directory
	files := http.FileServer(http.Dir("/public"))
	// files := http.FileServer(http.Dir(config.Static))

	// strips off "/static/" from request URLs and
	// looks for a file matching that name in the "/public" directory
	mux.Handle("/static/", http.StripPrefix("/static/", files))

	// redirects URLS to a handler function
	mux.HandleFunc("/", index)
	// mux.HandleFunc("/err", err)
	// mux.HandleFunc("/login", login)
	// mux.HandleFunc("/logout", logout)
	// mux.HandleFunc("/signup", signup)
	// mux.HandleFunc("/signup_account", signupAccount)
	// mux.HandleFunc("/authenticate", authenticate)
	// mux.HandleFunc("/thread/new", newThread)
	// mux.HandleFunc("/thread/create", createThread)
	// mux.HandleFunc("/thread/post", postThread)
	// mux.HandleFunc("/thread/read", readThread)

	server := &http.Server{
		Addr:    "0.0.0.0:8080",
		Handler: mux,
	}
	server.ListenAndServe()
}

func index(w http.ResponseWriter, r *http.Request) {
	// files := []string{"templates/layout.html",
	// 	"templates/navbar.html",
	// 	"templates/index.html"}
	fmt.Println("hello")
	// templates := template.Must(template.ParseFiles(files...))
	// threads, err := data.Threads()
	// if err == nil {
	// 	templates.ExecuteTemplate(w, "layout", threads)
	// }
}
