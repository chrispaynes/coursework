// GLOBALS
// R_INDEX is the collection of rental properties listed in the DOM
var R_INDEX = document.getElementsByTagName("main")[0];

// app_main starts by calling index() to display property rentals
function app_main() {
  renderPropertyCollection();
  expandImage();
}
