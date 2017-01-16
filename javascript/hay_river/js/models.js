function DetailedPropertyListing(property) {
  this.div = document.createElement("div");
  this.div.id = "slideshow_main";
  this.thumbnail = new Thumbnail(property, "slideshow-slide_image");
  this.description = new Description(property, "aside");
  this.section = document.createElement("section");
  this.section.id = "image_cont";
  this.floorplan = new Floorplan(property);
  this.map = new PropertyMap(property);
}

function PropertyPreview(property, index) {
  this.figure = document.createElement("figure");
  this.figure.className = "article_rental_prop_cntr";
  this.anchor = document.createElement("a");
  this.anchor.href = "#";
  this.anchor.id = index;
  this.thumbnail = new Thumbnail(index, "");
  this.figcaption = new FigCaption(index)
  this.description = new Description(index);
  this.appendToPage = function() {
    document.getElementsByTagName("main")[0].appendChild(this.figure);
    this.anchor.appendChild(this.thumbnail);
    this.figure.appendChild(this.anchor);
    this.figure.appendChild(this.figcaption);
  }
}

function Floorplan(property) {
  this.floorplan = document.createElement("img");
  this.floorplan.className = "floorplan";
  this.floorplan.id = "floorplan_" + property;
  this.floorplan.src = "img/" + RENTALS[property].floorplan[0];
  return this.floorplan;
}

function Thumbnail(property, cssClass) {
  this.thumbnail = document.createElement("img");
  this.thumbnail.className = cssClass;
  this.thumbnail.id = property;
  this.thumbnail.src = "img/" + RENTALS[property].image[0];
  return this.thumbnail;
}

function PropertyMap(property) {
  this.map = document.createElement("div");
  this.map.id;
  this.map.className = "map";
  this.map.innerHTML = RENTALS[property].map;
  return this.map;
}

function Description(property, element) {
  this.container = document.createElement(element);
  this.container.className = "slideshow_description-container"
  this.description = document.createElement("p");
  this.description.innerHTML = setPropertyContent(property);
  this.container.appendChild(this.description);
  return this.container;
}

function FigCaption(property) {
  this.figcaption = document.createElement("figcaption");
  this.address = document.createElement("h3");

  this.address.innerHTML = "<a href='#'>" + RENTALS[property].addr + "</a>";
  this.addressContainer = document.createElement("div");
  this.addressContainer.className = "address-container";
  this.description = document.createElement("p");
  this.description.innerHTML = RENTALS[property].category;
  this.addressContainer.appendChild(this.address);
  this.figcaption.appendChild(this.addressContainer);
  this.figcaption.appendChild(this.description);
  return this.figcaption;
}
