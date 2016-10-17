/*

Initiated by direct invocation or runtime errors,
Panic() stops a function's execution flow
(except for deferred statements), and begins panicking.

Recover() regains control of a panicking goroutine.
*/
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
package main

import "fmt"

// main() calls f().
func main() {
    f()
    fmt.Println("Returned normally from f.")
}

// f() calls g(), but makes a defer call to recover from g() if necessary.
func f() {
    defer func() {
        // r stores the value passed to the panic() within g().
        if r := recover(); r != nil {
            fmt.Println("Recovered in f()", r)
        }
    }()
    fmt.Println("Calling g.")
    g(0)
    fmt.Println("Returned normally from g.")
}

// g() uses recursion to increment i, but panics if i > 3.
// Otherwise g() outputs i and uses recursion to call itself + 1.
func g(i int) {
    if i > 3 {
        fmt.Println("Panicking!")

        // panic() accepts the value that caused the panic.
        panic(fmt.Sprintf("%v", i))
    }
    defer fmt.Println("Defer in g()", i)
    fmt.Println("Printing in g()", i)
    g(i + 1)
}

// OUTPUT RETURNS

// Calling g.
// Printing in g 0
// Printing in g 1
// Printing in g 2
// Printing in g 3
// Panicking!
// Defer in g 3
// Defer in g 2
// Defer in g 1
// Defer in g 0
// Recovered in f 4
// Returned normally from f.
