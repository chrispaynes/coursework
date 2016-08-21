// Based off Todd McLeod's Code Clinic on Lynda.com
// Collects and outs weather data from Lake Pend Oreille, Idaho.
// Calculates Mean and Median: wind speed, air temperature and barometric pressure
// Within a date range

// DATA SOURCE: https://lpo.dt.navy.mil/data/
// https://lpo.dt.navy.mil/data/DM/Environmental_Data_Deep_Moor_2016.txt

package main

import (
  "fmt"
  "net/http"
  "log"
  "encoding/csv"
)

func main() {
	data_source := "https://raw.githubusercontent.com/lyndadotcom/LPO_weatherdata/master/Environmental_Data_Deep_Moor_2015.txt"

	// Creates HTTP Get request from data_source argument
	// Returns response body or an error
  resp, err := http.Get(data_source)

	// Prints fatal errors and immediately calls os.Exit(1)
  if err != nil {
    fmt.Printf("Did not receive a HTTP response from %v\n", "\"" + data_source + "\"")
    log.Fatal(err)
  }

	// Creates NewReader from io.Reader interface
	// Reads records from a CSV-encoded file
	// Return value references the *Reader struct {}
	// By default NewReader returns an &Reader instance with "," set for the Rune "Comma" field 
	rdr := csv.NewReader(resp.Body)

	// Reassigns Comma field to tab-delimitation
  rdr.Comma = '\t'
	
	// Sets object to ignore leading white space in a field 
  rdr.TrimLeadingSpace = true
	
	// ReadAll uses *Reader to read the argument's remaining records
	// Reads and slices each record/line from source file until io.EOF
	// Appends each record/line slice to a "records" array
	// Returns the "records" array as record slices containing string literals
	rows, err := rdr.ReadAll()

	// Loops through array printing each row
	for _, row := range rows {
		fmt.Println(row)
	} 

	// Defers until the surrounding function executes its return statement
		// OR defers until the function reaches its function body ending
		// OR defers because the corresponding goroutine is panicking
	// Closes the reader
  defer resp.Body.Close()

	// Begins to panic when an error is present
	// Panic stops the ordinary flow control and begins panicking.
	// Panic stops the function execution
	// Executes defer functions and returns the panicked function to its caller
  if err != nil {
    panic(err)
  }


}
