////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// REASSIGNING VARIABLES & STRING IMMUTABILITY

package main

import (
	"fmt"
)

var x = "Unused variable outside of func"

func main() {
  // REASSIGNING VALUES TO X
	x = "reassigned global x var from inside a func"
	fmt.Println(x) // "reassigned global x var from inside a func"

	x = "ABC"
	fmt.Println(x)                           // "ABC"
	fmt.Println("my memory address is:", &x) // 0x182190

	x = "ABC DEF"
	fmt.Println(x)                          // "ABC DEF"
	fmt.Println("my memory address is", &x) // 0x182190



  // STRINGS ARE IMMUTABLE
	x[0] = "Z" // error: "cannot assign to x[0]",
		         // error: "cannot use "Z" (type string) as type byte in assignment"
	x[0] = 'Z' // cannot assign to x[0]

  // DECLARING NEW VARIABLES FROM X
  y := x
	fmt.Println(y)                                 // "ABC DEF"
  fmt.Println("Y's memory address is", &y)       // 0x1040a150
  fmt.Println("X's memory address is still", &x) // 0x182190

}
