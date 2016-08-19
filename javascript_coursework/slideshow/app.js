var SLIDESHOW_IMAGES = getFocalSlides([previous_img, current_img, next_img]);

// collects DOM image elements for 3 main slideshow panels
// saves images globally as previous, current, and next
function getFocalSlides(images) {
  images.forEach(function(img) {
    img = document.getElementById(img);
  });
  return images;
}

// resets slideshow to use the slideshow image array' first 3 values
function initSlideShow() {
  SLIDESHOW_IMAGES.map(function(i) {
    i.children[0].id = SLIDESHOW_IMAGES.indexOf(i);
    i.children[0].src = "img/" + source_images[SLIDESHOW_IMAGES.indexOf(i)] + ".jpg";
  });

  writeSlideNumber()
}

// writes the Current Slide # / Max Slide # to the DOM
// uses the previous image + 1 (because of the 0 index) as the Current Slide #
// uses data array length as the Max Slide #
function writeSlideNumber() {
  document.getElementsByTagName("h2")[0].innerHTML =
    (parseInt(previous_img.children[0].id) + 1) + " / " + (source_images.length);
};