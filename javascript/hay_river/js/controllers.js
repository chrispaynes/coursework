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
  // RENTAL PICS SLIDESHOW
  var slideshow_parent_container = document.createElement("div");
  var slideshow_btn_container = document.createElement("div");
  var prev_slide = document.createElement("a");
  prev_slide.id = "prev_slide";
  var next_slide = document.createElement("a");
  next_slide.id = "next_slide";
  slideshow_parent_container.className = "slideshow_parent_container";
  slideshow_btn_container.className = "w3-clear nextprev";

  // FLOORPLAN SLIDESHOW
  var floorplan_parent_container = document.createElement("div");
  var floorplan_btn_container = document.createElement("div");
  floorplan_parent_container.className = "floorplan_parent_container";
  floorplan_btn_container.className = "w3-clear nextprev";

  var prev_fp_slide = document.createElement("a");
  prev_fp_slide.id = "prev_fp_slide";
  var next_fp_slide = document.createElement("a");
  next_fp_slide.id = "next_fp_slide";

  // DEFINE FLOORPLAN SLIDER BUTTONS
  prev_fp_slide.className = "w3-left w3-btn";
  prev_fp_slide.textContent = "❮ Previous";
  next_fp_slide.className = "w3-right w3-btn";
  next_fp_slide.textContent = "Next ❯";

  // ADD FLOORPLAN SLIDER BUTTONS TO BTN CONTAINER
  floorplan_btn_container.appendChild(prev_fp_slide);
  floorplan_btn_container.appendChild(next_fp_slide);

  // ADD FLOORPLAN AND SLIDER BTNS TO THUMBNAIL SLIDESHOW
  floorplan_parent_container.appendChild(property.floorplan);
  floorplan_parent_container.appendChild(floorplan_btn_container);

  // DEFINE SLIDER BUTTONS
  prev_slide.className = "w3-left w3-btn";
  prev_slide.textContent = "❮ Previous";
  next_slide.className = "w3-right w3-btn";
  next_slide.textContent = "Next ❯";

  // ADD SLIDER BUTTONS TO BTN CONTAINER
  slideshow_btn_container.appendChild(prev_slide);
  slideshow_btn_container.appendChild(next_slide);

  // ADD PROPERTY THUMBNAIL AND SLIDER BTNS TO THUMBNAIL SLIDESHOW
  slideshow_parent_container.appendChild(property.thumbnail);
  slideshow_parent_container.appendChild(slideshow_btn_container);

  property.div.appendChild(slideshow_parent_container);
  property.div.appendChild(property.description);
  //
  //
  //
  //
  property.section.appendChild(floorplan_parent_container);

  // property.section.appendChild(property.floorplan);
  //
  //
  //
  //
  property.section.appendChild(property.map);
}

function rotateSlide(image_element, id, mutation, collection) {
  var current_image = collection.indexOf(image_element.src.replace(/^[^*]*\//, ""));

  // TODO: CLEAN UP REGEX AND IMPROVE READABILITY
  // If mutating results in out of bounds, then the mutation is the array length * -1. else mutation
  if (mutation === 1) {
    (mutation + current_image) == collection.length ? (mutation += ((current_image * -1) - 1)) : mutation = mutation;
  } else if (mutation === -1) {
    current_image === 0 ? (mutation += collection.length) : mutation = mutation;
  }

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
  next_slide_btn = document.getElementById("next_slide");
  prev_slide_btn = document.getElementById("prev_slide");

  next_fp_slide_btn = document.getElementById("next_fp_slide");
  prev_fp_slide_btn = document.getElementById("prev_fp_slide");

  floorplan_element = document.getElementById("floorplan_" + id);
  prev_fp_slide_btn.addEventListener("click", function() {
    rotateSlide(floorplan_element, id, -1, RENTALS[id].floorplan);
  }, false);

  next_fp_slide_btn.addEventListener("click", function() {
    rotateSlide(floorplan_element, id, 1, RENTALS[id].floorplan);
  }, false);


  // ADD NAVIGATIONAL CLICK EVENT LISTENER FOR SLIDESHOW
  prev_slide_btn.addEventListener("click", function() {
    rotateSlide(image_element, id, -1, RENTALS[id].image);
  }, false);

  next_slide_btn.addEventListener("click", function() {
    rotateSlide(image_element, id, 1, RENTALS[id].image);
  }, false);

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
