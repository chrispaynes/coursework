////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// UNUSED VARIABLE DECLARATIONS and UNUSED PACKAGES

package main

import (
	"fmt"
	"net/http" // error: "imported and not used: 'net/http' "
)

var x = "Unused variable outside of function" // This is fine.

// Variable y within main() is declared and unused. This causes an error.
func main() {
	var y = "Unused variable inside a function" // error: "y declared and not used"

	fmt.Println("FooBaz")
}

// greeting()'s g parameter is intentionally unused. This is fine.
func greeting(g string) {
}
