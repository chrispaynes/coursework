// index() displays a listing of all properties from the database
function index() {
  var prop_count = document.getElementById("prop_count");
  prop_count.innerHTML = app_rental_props.length;

  //  loops through property rental database
  app_rental_props.map(function(app_rentals, i) {

    //creates new Rental object to hold each database object
    var prop = new Rental(app_rentals, i);

    // adds the property figure to the index page
    rental_index.appendChild(prop.fig);

    //adds image to anchor elem
    prop.anch.appendChild(prop.img);
    //adds achor to the figure
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
function show(id) {
  var sl = document.getElementById("slideshow");

  var fr = new FullRental();
  fr.img.id = "slideshow-slide_image";
  fr.img.src = "img/" + app_rental_props[id].image_src;
  fr.h3.innerHTML = app_rental_props[id].address + "<br />" + app_rental_props[id].city + ", " + app_rental_props[id].state + " " + app_rental_props[id].zip + "<br>"
  fr.p.innerHTML = app_rental_props[id].category + "<br><br>" + "List of Features and Amenities: <br>" + app_rental_props[id].desc.replace(/, /g, "<br>");
  fr.fp.src = app_rental_props[id].floor;
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
        show(l.id)
      }, false);
    }
    if (window.attachEvent) {
      rental_index.attachEvent("click", function() {
        show()
      });
    }

  });
}