function setPropertyCounter() {
  return document.getElementById("count").textContent = RENTALS.length +
    " Great Locations to\xa0Choose\xa0from";
}

function renderPropertyCollection() {
  setPropertyCounter();
  RENTALS.map(function(rental, i) {
    new PropertyPreview(rental, i).appendToPage();
  });
}

function setPropertyContent(id) {
  var features = RENTALS[id].features.map(function(feature) {
    return "<li><span>" + feature + "</span></li>"
  });

  return "<h3>" + RENTALS[id].addr + "</h3>" +
    "<p class='property-category'>" + RENTALS[id].category + "<br>" +
    "<p class='property-description-header'>DESCRIPTION</p>" +
    "<p class='property-description'>" + RENTALS[id].description + "<br>" +
    "<p class='property-features-header'>AMENITIES</p>" +
    "<ul class='property-features' id='property-features-container'>" + features.join("") + "</ul>";
}

function appendPropertyPageToDOM(property) {
  property.div.appendChild(property.thumbnail);
  property.div.appendChild(property.description);
  property.section.appendChild(property.floorplan);
  property.section.appendChild(property.map);
}

function rotateSlide(image_element, id, mutation) {
  console.log(image_element.src);
  var current_image = RENTALS[id].image.indexOf(image_element.src.replace(/^[^*]*\//, ""));
  console.log((mutation + current_image) + " / " + current_image + " / " + (RENTALS[id].image.length - 1) + " " + RENTALS[id].image[current_image + mutation]);

  // TODO: CLEAN UP REGEX AND IMPROVE READABILITY
  // If mutating results in out of bounds, then the mutation is the array length * -1. else mutation
  (mutation + current_image) == RENTALS[id].image.length ? (mutation += ((current_image * -1) - 1)) : mutation = mutation;
  image_element.src = "img/" + RENTALS[id].image[current_image + mutation]
}

function renderNewRentalPage(newLargeRental) {
  var slideshow = document.getElementById("slideshow");
  slideshow.innerHTML = "";
  slideshow.appendChild(newLargeRental.div);
  slideshow.appendChild(newLargeRental.section);
  slideshow.style.display = "block";
}

function showDetailedPropertyListing(id) {
  var listing = new DetailedPropertyListing(id);
  var image_element = {};

  appendPropertyPageToDOM(listing);
  renderNewRentalPage(listing);

  image_element = document.getElementById(id)
  image_element.addEventListener("click", function() {
    rotateSlide(image_element, id, 1);
  }, false);
}

// expandImage() enlarges an image when a user clicks it's thumbnail.
function expandImage() {
  // links stores an array of all anchor tags in the main index.
  var links = Array.prototype.slice.call(document.querySelectorAll("#index a"));

  // links.map adds a showDetailedPropertyListing() event listener to each link.
  links.map(function(l) {
    google.maps.event.addDomListener(l, 'click', function() {
      showDetailedPropertyListing(l.id);
      return new GoogleMap(l.id);
    });
  });
}
