// checkRange() verifies an element meets a condition.
// If the condition = FALSE, it resets the element to the reset value.
// If the condition = TRUE, it returns a mutated element
// checkRange(elem *object, cond *int, rst *int, unary_op *int)
function checkRange(elem, cond, rst, unary_op) {
  if(elem.children[0].id == cond ) {
    return elem.children[0].id = rst;
  }
  return elem += unary_op;
};

// mutID maps a mutation value over the data object to
// increment or decrement image ID values
// mutID(d_obj *object, mv *int)
function mutID(d_obj, mv) {
  d_obj.map(function(img) {

    // resets the ID when a picture's index value is less than the data array's length
    if(mv === 1) {
      return checkRange(img, (source_images.length ), 0, img.children[0].id++);
    }

    // resets the ID when a picture's index value is less than 0
    if(mv === -1) {
      return checkRange(img, -1 , (source_images.length - 1), img.children[0].id--);
    }
  });
}

// mutSRC loops a data array and shifts a target's current image
// source values up to the next image in the data collection
// mutSRC(tgt *object)
function mutSRC(tgt) {
  tgt.map(function(img) {
    img.children[0].src = "img/" + source_images[img.children[0].id] + ".jpg";
  });
}

// main_rotate() invokes the modules function calls:
// Increments or decrements the image element's ID attribute
// Rotates the slideshow right or left
// Writes the slide number to the DOM
// rotate(target *object, mutation_value *int)
function main_rotate(target, mutation_value) {
  mutID(target, mutation_value);
  mutSRC(target);
  writeSlideNums();
}