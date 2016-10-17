////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// VARIABLE DECLARATIONS OUTSIDE OF FUNCTION BODY

package main

import (
	"fmt"
)

var x = "World" // "Hello World"
var x string = "World" // "Hello World"
var x := "World" // syntax error: "unexpected :="
x = "World" // syntax error: "non-declaration statement outside function body"
x string = "World" // syntax error: "non-declaration statement outside function body"
x := "World" // syntax error: "non-declaration statement outside function body"

func main() {
	fmt.Println("Hello", x)
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// VARIABLE DECLARATIONS WITHIN FUNCTION BODY

package main

import (
	"fmt"
)

func main() {
	// Implicit variable notation.
	var a = "World A"
  fmt.Println("Hello", a) // Hello World A
	fmt.Printf("var a is a %T", a) // var a is a string

	// Implicit variable notation.
	var b string = "World B"
  fmt.Println("Hello", b) // Hello World B

	var c := "World C" // syntax error: "unexpected :="

  d := "World D"
  fmt.Println("Hello", d) // Hello World D

	e = "World E" // undefined: e
	f string = "World F" // syntax error: "unexpected string at end of statement"

	g := "World G"
  fmt.Println("Hello", g) // Hello World G
  g := "New World G" // error: "no new variables on left side of :="
  g = "Newer Shinier World G"
  fmt.Println("Hello", g) // Newer Shinier World G
}
