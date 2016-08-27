// setFocalImages() returns an array of DOM image elements
// for the previous, current, and next image
function setFocalImages() {
  var imgs = [previous_img, current_img, next_img];
  imgs.map(function(img) {
    img = document.getElementById(img);
  });
  return imgs;
}

// initSlides resets the slideshow by displaying image slides 1-3
function initSlides() {
  setFocalImages().map(function(i) {
    i.children[0].id = setFocalImages().indexOf(i);
    i.children[0].src = "img/" + source_images[setFocalImages().indexOf(i)] + ".jpg";
  });

  writeSlideNums();
}

// writeSlideNums outputs the current slide number to the DOM
// current_slide = previous_image ID + 1
// total_slides = data.length
// returns: "1 / 7" to the DOM when display slide 1 of 7
function writeSlideNums() {
  document.getElementsByTagName("h2")[0].innerHTML =
    (parseInt(previous_img.children[0].id) + 1) + " / " + (source_images.length);
};