// GLOBALS
var rental_index = document.getElementsByTagName("main")[0];
var floorplans = document.getElementById("floorplans");


// app_main starts by calling index() to display property rentals
function app_main() {
  index();
  expand();
}