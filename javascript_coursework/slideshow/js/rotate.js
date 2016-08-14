// 53 && 1947
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

// increments all picture Id values
// resets the ID when a picture's index value is less than the data array's length
function incrementId() {
  slideshow_images.map(function(img) {
    checkRange(img, (source_images.length - 1), 0, img.children[0].id++);
  });
}

// decrements all picture Id values
// resets the ID when a picture's index value is less than 0
function decrementId() {
  slideshow_images.map(function(img) {
    checkRange(img, -1 , (source_images.length - 1), img.children[0].id--);
  });
};

// function incrementSrcId() {

// }

// rotates the slideshow to the right
// increments the image element's ID attribute
// writes the slide number to the <h2> tag
function rotateRight() {
  incrementId()

  previous_img.children[0].src = "img/" + source_images[previous_img.children[0].getAttribute("id")] + ".jpg";
  current_img.children[0].src = "img/" + source_images[current_img.children[0].getAttribute("id")] + ".jpg";
  next_img.children[0].src = "img/" + source_images[next_img.children[0].getAttribute("id")] + ".jpg";
  writeSlideNumber();
}

// rotates the slideshow to the right
// decrements the image element's ID attribute
// writes the slide number to the <h2> tag
function rotateLeft() {
  decrementId()

  previous_img.children[0].src = "img/" + source_images[previous_img.children[0].getAttribute("id")] + ".jpg";
  current_img.children[0].src = "img/" + source_images[current_img.children[0].getAttribute("id")] + ".jpg";
  next_img.children[0].src = "img/" + source_images[next_img.children[0].getAttribute("id")] + ".jpg";

  writeSlideNumber();
}