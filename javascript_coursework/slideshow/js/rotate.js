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
function incrementId(target) {
  target.map(function(img) {
    checkRange(img, (source_images.length ), 0, img.children[0].id++);
  });
}

// decrements all picture Id values
// resets the ID when a picture's index value is less than 0
function decrementId(target) {
  target.map(function(img) {
    checkRange(img, -1 , (source_images.length - 1), img.children[0].id--);
  });
};

function mapOverImages(target) {
  target.map(function(image) {
    image.children[0].src = "img/" + source_images[image.children[0].id] + ".jpg";
  });
}

// rotates the slideshow to the right or left
// increments or decrements the image element's ID attribute
// writes the slide number to the DOM
function rotate(mutation, target) {
  mutation(target);
  mapOverImages(target);
  writeSlideNumber();
}