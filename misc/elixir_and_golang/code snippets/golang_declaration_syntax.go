// *original source code courtesy of:
// "https://blog.golang.org/gos-declaration-syntax"
// Go declarations read like C, but they read well from left to right:

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
   func( func(int, int) int, int ) func(int, int) int
// 1     2    3    3    4    5     6    7    7    8   #s = LEFT TO RIGHT READING ORDER
// FC    FC                        FC                 FC = FUNCTION CALLS
//       P    P    P    P    P          P    P        P  = PARAMETERS
//                      RV         RV             RV  RV = RETURN VALUES

// #1: Anonymous function.

// #2: Anonymous function accepts a func() as a parameter.

// #3: Anonymous function accepts a func() that accepts 2 integer parameters.

// #4: Anonymous function accepts a func() that accepts 2 integer parameters,
//     returns 1 integer value.

// #5: Anonymous function that accepts a func() that accepts 2 integer parameters that
//     returns 1 integer value, also accepts another integer value.

// #6: The Anonymous function that accepts a func() that accepts 2 integer parameters that
//     returns 1 integer value, also accepts another integer value, and ultimately returns
//     a function call.

// #7: The Anonymous function that accepts a func() that accepts 2 integer parameters that
//     returns 1 integer value, also accepts another integer value, and ultimately returns
//     a function call, which accepts 2 integer values.

// #8: The Anonymous function that accepts a func() that accepts 2 integer parameters that
//     returns 1 integer value, also accepts another integer value, and ultimately returns
//     a function call, which accepts 2 integer values and returns 1 integer.

// C code? = int (*(*fp)(int (*)(int, int), int))(int, int)


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// READING DECLARATIONS

x int     // reads: "x is an int"
p *int    // reads: "p is a pointer to int"
a [3]int  // reads: "a is an array[3] of int"

func helloNum(argc int, argv []string) int
// function helloNum takes an int and a slice of strings and returns an int.
// Drop the parameter names and it's just as clear
func helloNum(int, []string) int

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// CLOSURE EXPRESION

package main

import (
	"fmt"
)

func main() {

  // sum stores the sum a + b by closing over values 10 and 20.
	sum := func(a, b int) int {
		return a + b
	}(10, 20)

	fmt.Println(sum) // returns 30.

}

// * sum as a one line expression.
sum := func(a, b int) int { return a + b } (3, 4)
