var app_maps = [map_1821, map_1818, map_1815, map_N4923];

// index() displays a listing of all properties from the database
function index() {
  var count = document.getElementById("count");
  count.innerHTML = rentals.length;

  // loops through property rentals database
  // rentals.map(function(app_rentalss *object, i *int)
  rentals.map(function(app_rentals, i) {
    // creates new Rental object to hold each database object
    var prop = new SmallRental(app_rentals, i);

    // adds the property figure to the index page
    R_INDEX.appendChild(prop.fig);

    // adds image to anchor elem
    prop.anch.appendChild(prop.img);
    // adds anchor to the figure
    prop.fig.appendChild(prop.anch);

    // adds h3 to caption
    prop.capt.appendChild(prop.h3);
    // adds p element to caption
    prop.capt.appendChild(prop.para);

    // adds figcaption to figure
    prop.fig.appendChild(prop.capt);

  });
}

// getSlideshow returns the slideshow object.
// getSlideshow() => *html obj
function getSlideshow() {
  return document.getElementById("slideshow");
}

// attachClickContent appends DOM content when the user clicks the thumbnail.
// attachClickContent(model *obj)
function attachClickContent(model) {
  // adds large photo and <aside> content to div
  model.div.appendChild(model.img);
  model.div.appendChild(model.asd);

  // adds floorplan and map to section
  model.sect.appendChild(model.fp);
  model.sect.appendChild(model.map);
}

// resets slideshow element before rendering new slide
function resetSlideShow(s, lr) {
  s.innerHTML = "";
  s.appendChild(lr.div);
  s.appendChild(lr.sect);
  s.style.display = "block";
}

// show() displays a larger property listing for a single database rentals property
// show(id *string => *int)
function show(id) {
  parseInt(id);
  var sl = getSlideshow();
  var lr = new LargeRental();

  lr.img.src = "img/" + rentals[id].image;
  lr.fp.src = "img/" + rentals[id].floor;

  aside_body = rentals[id].category + "<br><br>" +
    "List of Features and Amenities: <br>" +
    rentals[id].desc.replace(/, /g, "<br>");

  lr.map.innerHTML = rentals[id].map;

  // adds rental description content to aside
  lr.asd.innerHTML = "<h3>" + rentals[id].addr + "</h3>" +
    "<p>" + aside_body + "</p>";

  attachClickContent(lr);
  resetSlideShow(sl, lr);
}



// expand() enlarges an image when a user clicks it's thumbnail.
function expand() {
  // links stores an array of all anchor tags in the main index.
  var links = Array.prototype.slice.call(document.querySelectorAll("#index a"));

  // links.map adds a show() event listener to each link.
  links.map(function(l) {

    // Creates event listeners when page finishes loading
    if (window.addEventListener) {
      l.addEventListener("click", function() {
        show(l.id);
        setTimeout(function() {
          initMaps(l.id);
        }, 1);
      }, false);
    }
    if (window.attachEvent) {
      R_INDEX.attachEvent("click", function() {
        show(l.id)
      });
    }

  });
}
