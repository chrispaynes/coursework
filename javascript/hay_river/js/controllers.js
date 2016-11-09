function listIndexOfProperties() {
  document.getElementById("count").innerHTML = rentals.length;
  rentals.map(function(app_rentals, i) {
    var prop = new PropertyThumbnail(app_rentals, i);
    setPropertyThumbail(prop);
  });
}

function setPropertyThumbail(property) {
  R_INDEX.appendChild(property.figure);
  property.anchor.appendChild(property.image);
  property.figure.appendChild(property.anchor);
  property.figcaption.appendChild(property.address);
  property.figcaption.appendChild(property.content);
  property.figure.appendChild(property.figcaption);
}

function setPropertyContent(id) {
  return "<h3>" + rentals[id].addr + "</h3>" +
    "<p>" + rentals[id].category + "<br><br>" +
    "<p>" + rentals[id].description + "<br><br>" +
    rentals[id].features.replace(/, /g, "<br>") + "</p>";
}

function appendPropertyPageToDOM(property) {
  property.div.appendChild(property.thumbnail);
  property.div.appendChild(property.description);
  property.section.appendChild(property.floorplan);
  property.section.appendChild(property.map);
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

  appendPropertyPageToDOM(listing);
  renderNewRentalPage(listing);
}

// expandImage() enlarges an image when a user clicks it's thumbnail.
function expandImage() {
  // links stores an array of all anchor tags in the main index.
  var links = Array.prototype.slice.call(document.querySelectorAll("#index a"));

  // links.map adds a showDetailedPropertyListing() event listener to each link.
  links.map(function(l) {

    // Creates event listeners when page finishes loading
    if (window.addEventListener) {
      l.addEventListener("click", function() {
        showDetailedPropertyListing(l.id);
        setTimeout(function() {
          initMaps(l.id);
        }, 1);
      }, false);
    }
    if (window.attachEvent) {
      R_INDEX.attachEvent("click", function() {
        showDetailedPropertyListing(l.id)
      });
    }

  });
}
