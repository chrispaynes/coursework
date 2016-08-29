// DOM descriptions for InfoWindow that pops up when clicking a Google Map markers
var leFumoirDesc = "<h4>Le Fumoir</h4>" + "<p class='info'>Healthy, inventive cuisine with Scandinavian influences. Each week a new menu for lunch and dinner. A fish of the day is offered for lunch every day of the week as well as vegetarian dishes. </p>";
var louvreDesc = "<h4>Louvre Museum / Musée du Louvre</h4>" + "<p class='info'>The Louvre or the Louvre Museum is the world's largest museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the 1st arrondissement.</p>";

// infoPopup holds a Google Maps InfoWindow object
// new google.maps.InfoWindow creates a Google Maps
var leFumoir_infoPopup = new google.maps.InfoWindow({
  content: leFumoirDesc,
}); //end info pop

var louvre_infoPopup = new google.maps.InfoWindow({
  content: louvreDesc,
}); //end info pop