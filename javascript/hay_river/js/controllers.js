function setPropertyCounter() {
  return document.getElementById("count").textContent = RENTALS.length +
    " Great Locations to\xa0Choose\xa0From";
}

function renderPropertyCollection() {
  setPropertyCounter();
  RENTALS.map(function(rental, i) {
    new PropertyPreview(rental, i).appendToPage();
  });
}

function setPropertyContent(id) {
  var features = RENTALS[id].features.map(function(feature) {
    return "<li><span>" + feature + "</span></li>";
  });

  return "<h3>" + RENTALS[id].addr + "</h3>" +
    "<p class='property-category'>" + RENTALS[id].category + "<br>" +
    "<p class='property-description-header'>DESCRIPTION</p>" +
    "<p class='property-description'>" + RENTALS[id].description + "<br>" +
    "<p class='property-features-header'>AMENITIES</p>" +
    "<ul class='property-features' id='property-features-container'>" + features.join("") + "</ul>";
}

function appendPropertyPageToDOM(property) {
  var left_nav = document.createElement("a");
  left_nav.className = "w3-btn-floating w3-display-left";
  // left_nav.textContent = &#10094;
  left_nav.textContent = ">";

  var right_nav = document.createElement("a");
  right_nav.className = "w3-btn-floating w3-display-right";
  // right_nav.textContent = &#10095;
  right_nav.textContent = "<";

  // var right_nav = "<a class='w3-btn-floating w3-display-right' onclick='plusDivs(+1)'>&#10095;</a>";

  property.div.appendChild(left_nav);
  property.div.appendChild(property.thumbnail);
  property.div.appendChild(right_nav);

  // property.div.appendChild.right_nav = "<a class='w3-btn-floating w3-display-right' onclick='plusDivs(+1)'>&#10095;</a>";



  property.div.appendChild(property.description);
  property.section.appendChild(property.floorplan);
  property.section.appendChild(property.map);
}

function rotateSlide(image_element, id, mutation, collection) {
  var current_image = collection.indexOf(image_element.src.replace(/^[^*]*\//, ""));
  // console.log((mutation + current_image) + " / " + current_image + " / " + (collection.length - 1) + " " + collection[current_image + mutation]);

  // TODO: CLEAN UP REGEX AND IMPROVE READABILITY
  // If mutating results in out of bounds, then the mutation is the array length * -1. else mutation
  (mutation + current_image) == collection.length ? (mutation += ((current_image * -1) - 1)) : mutation = mutation;
  image_element.src = "img/" + collection[current_image + mutation];
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
  var floorplan_element = {};

  appendPropertyPageToDOM(listing);
  renderNewRentalPage(listing);

  image_element = document.getElementById(id);
  floorplan_element = document.getElementById("floorplan_" + id);

  floorplan_element.addEventListener("click", function() {
    rotateSlide(floorplan_element, id, 1, RENTALS[id].floorplan);
  }, false);

  image_element.addEventListener("click", function() {
    rotateSlide(image_element, id, 1, RENTALS[id].image);
  }, false);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// expandImage() enlarges an image when a user clicks it's thumbnail.
function expandImage() {
  // links stores an array of all anchor tags in the main index.
  var links = Array.prototype.slice.call(document.querySelectorAll("#index a"));
  var addr_links = Array.prototype.slice.call(document.querySelectorAll(".address-container"));

  // addr_links.map adds a showDetailedPropertyListing() event listener to each link.
  addr_links.map(function(l) {
    google.maps.event.addDomListener(l, 'click', function() {
      showDetailedPropertyListing(l.parentNode.previousSibling.id);
      return new GoogleMap(l.parentNode.previousSibling.id);
    });
  });

  // links.map adds a showDetailedPropertyListing() event listener to each link.
  links.map(function(l) {
    google.maps.event.addDomListener(l, 'click', function() {
      showDetailedPropertyListing(l.id);
      return new GoogleMap(l.id);
    });
  });
}
