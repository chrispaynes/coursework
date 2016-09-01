var app_maps = [map_1821, map_1818, map_1815, map_N4923];

// index() displays a listing of all properties from the database
function index() {
  var count = document.getElementById("count");
  count.innerHTML = rentals.length;

  //  loops through property rentals database
  // rentals.map(function(app_rentalss *object, i *int)
  rentals.map(function(app_rentals, i) {
    //creates new Rental object to hold each database object
    var prop = new SmallRental(app_rentals, i);

    // adds the property figure to the index page
    R_INDEX.appendChild(prop.fig);

    //adds image to anchor elem
    prop.anch.appendChild(prop.img);
    //adds anchor to the figure
    prop.fig.appendChild(prop.anch);

    //adds h3 to caption
    prop.capt.appendChild(prop.h3);
    //adds p element to caption
    prop.capt.appendChild(prop.para);

    //adds figcaption to figure
    prop.fig.appendChild(prop.capt);

  });
}

// show() displays a larger property listing for a single database rentals property
// show(id *string => *int)
function show(id) {
  parseInt(id);
  var sl = document.getElementById("slideshow");
  var lr = new LargeRental();

  lr.img.src = "img/" + rentals[id].image;
  lr.fp.src = "img/" + rentals[id].floor;

  aside_body = rentals[id].category + "<br><br>"
             + "List of Features and Amenities: <br>"
             + rentals[id].desc.replace(/, /g, "<br>");

  lr.map.innerHTML = rentals[id].map;

  // adds rental description content to aside
  lr.asd.innerHTML = "<h3>" + rentals[id].addr + "</h3>"
                   + "<p>" + aside_body + "</p>";

  // adds large photo and <aside> content to div
  lr.div.appendChild(lr.img);
  lr.div.appendChild(lr.asd);

  // adds floorplan and map to section
  lr.sect.appendChild(lr.fp);
  lr.sect.appendChild(lr.map);

  // resets slideshow element before rendering new slide
  sl.innerHTML = "";
  sl.appendChild(lr.div);
  sl.appendChild(lr.sect);
  sl.style.display = "block";
}

// expand() increases the size of an image when the use clicks on it's thumbnail
function expand() {
  // locates all anchor tags in the main index
  // slices node array into true array
  var links = Array.prototype.slice.call(document.querySelectorAll("#index a"));

  // maps over all image links and adds event listener based on their unique id
  // links.map(function(l *object)
  links.map(function(l) {

    // create event listeners when page finishes loading
    if (window.addEventListener) {
      l.addEventListener("click", function() {
        show(l.id);
        setTimeout(function(){ initMaps(l.id); }, 1);
      }, false);
    }
    if (window.attachEvent) {
      R_INDEX.attachEvent("click", function() { show(l.id) });
    }

  });
}