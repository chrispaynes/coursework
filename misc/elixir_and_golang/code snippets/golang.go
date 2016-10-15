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
	var a = "World A"
  fmt.Println("Hello", a) // Hello World A

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


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// UNUSED VARIABLE DECLARATIONS and UNUSED PACKAGES

package main

import (
	"fmt"
	"net/http" // error: "imported and not used: 'net/http' "
)

var x = "Unused variable outside of function" // this is fine

func main() {
  var y = "Unused variable inside a function" // error: "y declared and not used"

  fmt.Println("FooBaz")
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// REASSIGNING VARIABLES

package main

import (
	"fmt"
)

var x = "Unused variable outside of func"

func main() {
	x = "reassigned global x var from inside a func"
	fmt.Println(x) // "reassigned global x var from inside a func"

	x = "ABC"
	fmt.Println(x)                           // "ABC"
	fmt.Println("my memory address is:", &x) // 0x182190

	x = "ABC DEF"
	fmt.Println(x)                          // "ABC DEF"
	fmt.Println("my memory address is", &x) // 0x182190

	x[0] = "Z" // error: "cannot assign to x[0]",
		         // error: "cannot use "Z" (type string) as type byte in assignment"
	x[0] = 'Z' // cannot assign to x[0]

  y := x
	fmt.Println(y) // "ABC DEF"
	fmt.Println("my memory address is", &y) // 0x1040a150
}

func greeting(g string) {
  // parameter g is intentionally unused
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// DECLARING MULTI-LINE LITERALS

package main

import (
	"fmt"
)

func main() {

	var a = []int{1, 2, 3, 4, 5} // [1 2 3 4 5]
	fmt.Println(a)

	var b = []int{1,
		2,
		3,
		4,
		5,
	}
	fmt.Println(b) // [1 2 3 4 5]

	var c = []int{1,
		2,
		3,
		4,
		5}
	fmt.Println(c) // [1 2 3 4 5]

	var d = []int{1,
		2,
		3,
		4,
		5
		}
	fmt.Println(d) // syntax error: "unexpected semicolon or newline, expecting comma or }"

}
