////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// DECLARING MULTI-LINE LITERALS

package main

import (
	"fmt"
)

func main() {

  // This declaration works.
	var a = []int{1, 2, 3, 4, 5} // [1 2 3 4 5]
	fmt.Println(a)

  // This declaration works.
	var b = []int{1,
		2,
		3,
		4,
		5,
	}
	fmt.Println(b) // [1 2 3 4 5]

  // Does not need a comma after 5 because closing brace is on same line.
	var c = []int{1,
		2,
		3,
		4,
		5}
	fmt.Println(c) // [1 2 3 4 5]

  // Missing a comma after 5 because closing brace is on new line.
	var d = []int{1,
		2,
		3,
		4,
		5 // insert comma after
		}
	fmt.Println(d) // syntax error: "unexpected semicolon or newline, expecting comma or }"

}
