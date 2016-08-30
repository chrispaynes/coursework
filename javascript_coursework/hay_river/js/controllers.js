var app_maps = [map_1821, map_1818, map_1815, map_N4923];

// index() displays a listing of all properties from the database
function index() {
  var count = document.getElementById("count");
  count.innerHTML = app_rental_props.length;

  //  loops through property rental database
  // app_rental_props.map(function(app_rentals *object, i *int)
  app_rental_props.map(function(app_rentals, i) {
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

// show() displays a larger property listing for a single database rental property
// show(id *string => *int)
function show(id) {
  id = parseInt(id);
  var sl = document.getElementById("slideshow");

  var fr = new LargeRental();
  fr.img.id = "slideshow-slide_image";
  fr.img.src = "img/" + app_rental_props[id].image_src;
  fr.h3.innerHTML = app_rental_props[id].address + "<br />" + app_rental_props[id].city + ", " + app_rental_props[id].state + " " + app_rental_props[id].zip + "<br>"
  fr.p.innerHTML = app_rental_props[id].category + "<br><br>" + "List of Features and Amenities: <br>" + app_rental_props[id].desc.replace(/, /g, "<br>");
  fr.fp.src = app_rental_props[id].floor;
  // fr.map.id = app_rental_props[id].map;
  fr.map.innerHTML = app_rental_props[id].map;

  fr.asd.appendChild(fr.h3)
  fr.asd.appendChild(fr.p)
  fr.dv.appendChild(fr.img);
  fr.dv.appendChild(fr.asd);

  fr.s.appendChild(fr.fp);
  fr.s.appendChild(fr.map);

  fr.dv.appendChild(fr.asd);

  // resets the slideshow image before appending new slide
  sl.innerHTML = "";
  sl.appendChild(fr.dv)
  sl.appendChild(fr.s)
  sl.style.display = "block";
}

// expand() increases the size of an image when the use clicks on it's thumbnail
function expand() {
  // locates all anchor tags in the main index
  // slices node array into true array
  var links = Array.prototype.slice.call(document.querySelectorAll("#index a"));
  var link;

  // maps over all image links and adds event listener based on their unique id
  // links.map(function(l *object)
  links.map(function(l) {
    link = l;

    // create event listeners when page finishes loading
    if (window.addEventListener) {
      link.addEventListener("click", function() {
        show(l.id);
        setTimeout(function(){ initMaps(l.id); }, 1);

      }, false);
    }
    if (window.attachEvent) {
      R_INDEX.attachEvent("click", function() {
        show(l.id)
      });
    }

  });
}