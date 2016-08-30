
// Full Rental() creates an Object Prototype of a property listing
function LargeRental() {
  this.dv = document.createElement("div");
  this.img = document.createElement("img");
  this.asd = document.createElement("aside");
  this.h3 = document.createElement("h3");
  this.p = document.createElement("p");
  this.s = document.createElement("section");
  this.s.id = "image_cont"
  this.fp = document.createElement("img");
  this.fp.src = "";
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
  this.img.src = "img/" + db["image_src"];
  this.capt = document.createElement("figcaption");
  this.h3 = document.createElement("h3");
  this.h3.innerHTML = db["address"] + "<br/>" + db["city"] + ", " + db["state"] + " " + db["zip"];
  this.para = document.createElement("p");
  this.para.innerHTML = db["category"];
}