// rotates the center image based on which navigational button gets clicked

// checks if an element meets a condition
// resets element or continues to mutate it
function checkRange(element, condition, reset, mutation) {
  if(element.children[0].id == condition ) {
    element.children[0].id = reset;
  } else {
    element += mutation;
  }
};

// increments the ID value based on element's current ID
// resets the ID if the index value falls outside of source_image array
function incrementId() {
  slideshow_images.map(function(img) {
    checkRange(img, (source_images.length - 1), 0, img.children[0].id++);
  });
}

// decrements the ID value based on element's current ID
// resets the ID if the index value is less than 0
function decrementId() {
  slideshow_images.map(function(img) {
    checkRange(img, -1 , (source_images.length - 1), img.children[0].id--);
  });
};


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