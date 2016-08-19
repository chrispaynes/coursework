// checks if an element meets a condition
// resets element or continues to mutate it
function checkRange(element, condition, reset, unary_op) {
  if(element.children[0].id == condition ) {
    element.children[0].id = reset;
  } else {
    element += unary_op;
  }
};

// increments or decrements all picture Id values based on mutation value
// resets the ID when a picture's index value is less than the data array's length
// resets the ID when a picture's index value is less than 0
function mutateId(target, mutation_value) {
  target.map(function(img) {
    if(mutation_value === 1) {
      checkRange(img, (source_images.length ), 0, img.children[0].id++);
    } else if(mutation_value === -1) {
      checkRange(img, -1 , (source_images.length - 1), img.children[0].id--);
    } // end else
  })//end map
}

function mapOverImages(target) {
  target.map(function(image) {
    image.children[0].src = "img/" + source_images[image.children[0].id] + ".jpg";
  });
}

// rotates the slideshow to the right or left
// increments or decrements the image element's ID attribute
// writes the slide number to the DOM
function rotate(target, mutation_value) {
  mutateId(target, mutation_value);
  mapOverImages(target);
  writeSlideNumber();
}