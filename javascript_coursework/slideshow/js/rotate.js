// rotates the center image based on which navigational button gets clicked

// increments the ID value based on element's current ID
// resets the ID if the index value falls outside of source_image array
function incrementId() {
  for(var i in slideshow_images) {
    if(slideshow_images[i].children[0].id == (source_images.length - 1) ) {
      slideshow_images[i].children[0].id = 0;
    } else {
      slideshow_images[i].children[0].id++;
    }
  }
}

// decrements the ID value based on element's current ID
// resets the ID if the index value falls outside of source_image array
function decrementId() {
  for(var i in slideshow_images) {
    if((slideshow_images[i].children[0].id - 1) < 0) {
      slideshow_images[i].children[0].id = source_images.length - 1;
    } else {
      slideshow_images[i].children[0].id--;
    }
  }
}

// rotates the slideshow to the right
// increments the image element's ID attribute
// writes the slide number to the <h2> tag
function rotateRight() {
  incrementId()

  previous_image.children[0].src = "img/" + source_images[previous_image.children[0].getAttribute("id")] + ".jpg";
  current_image.children[0].src = "img/" + source_images[current_image.children[0].getAttribute("id")] + ".jpg";
  next_image.children[0].src = "img/" + source_images[next_image.children[0].getAttribute("id")] + ".jpg";
  writeSlideNumber();
}

// rotates the slideshow to the right
// decrements the image element's ID attribute
// writes the slide number to the <h2> tag
function rotateLeft() {
  decrementId()

  previous_image.children[0].src = "img/" + source_images[previous_image.children[0].getAttribute("id")] + ".jpg";
  current_image.children[0].src = "img/" + source_images[current_image.children[0].getAttribute("id")] + ".jpg";
  next_image.children[0].src = "img/" + source_images[next_image.children[0].getAttribute("id")] + ".jpg";

  writeSlideNumber();
}