// Full Rental() creates an Object Prototype of a property listing
function DetailedPropertyListing(property) {
  this.div = document.createElement("div");
  this.div.id = "slideshow_main";
  this.image = document.createElement("img");
  this.image.id = "slideshow-slide_image";
  this.image.src = "img/" + rentals[property].image;
  this.content = document.createElement("aside");
  this.content.innerHTML = setPropertyContent(property);
  this.section = document.createElement("section");
  this.section.id = "image_cont"
  this.floorplan = new Floorplan(property);
  this.map = document.createElement("div");
  this.map.id;
  this.map.className = "map";
  this.map.innerHTML = rentals[property].map;
}

function PropertyThumbnail(collection, index) {
  this.figure = document.createElement("figure");
  this.figure.className = "article_rental_prop_cntr";
  this.anchor = document.createElement("a");
  this.anchor.href = "#";
  this.anchor.id = index;
  this.image = document.createElement("img");
  this.image.src = "img/" + collection["image"];
  this.figcaption = document.createElement("figcaption");
  this.address = document.createElement("h3");
  this.address.innerHTML = collection["addr"];
  this.content = document.createElement("p");
  this.content.innerHTML = collection["category"];
}

function Floorplan(property) {
  this.floorplan = document.createElement("img");
  this.floorplan.className = "floorplan";
  this.floorplan.src = "img/" + rentals[property].floorplan;
  return this.floorplan;
}
