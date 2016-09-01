
// Full Rental() creates an Object Prototype of a property listing
function LargeRental() {
  this.div = document.createElement("div");
  this.div.id = "slideshow_main";
  this.img = document.createElement("img");
  this.img.id = "slideshow-slide_image";
  this.asd = document.createElement("aside");
  this.sect = document.createElement("section");
  this.sect.id = "image_cont"
  this.fp = document.createElement("img");
  this.fp.className = "floorplan";
  this.map = document.createElement("div");
  this.map.id;
  this.map.className = "map";
}

// Rental() creates an Object Prototype of a property listing
function SmallRental(db, i) {
  this.fig = document.createElement("figure");
  this.fig.className = "article_rental_prop_cntr";
  this.anch = document.createElement("a");
  this.anch.href = "#";
  this.anch.id = i;
  this.img = document.createElement("img");
  this.img.src = "img/" + db["image"];
  this.capt = document.createElement("figcaption");
  this.h3 = document.createElement("h3");
  this.h3.innerHTML = db["addr"];
  this.para = document.createElement("p");
  this.para.innerHTML = db["category"];
}