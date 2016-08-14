var previous_img = document.getElementById("previous_img");
var current_img = document.getElementById("current_img");
var next_img = document.getElementById("next_img");
var slideshow_images = [previous_img, current_img, next_img];

// resets slideshow to use the slideshow image array' first 3 values
function initSlideShow() {
  slideshow_images.map(function(i) {
    i.children[0].id = slideshow_images.indexOf(i);
    i.children[0].src = "img/" + source_images[slideshow_images.indexOf(i)] + ".jpg";
  });

  writeSlideNumber()
}

// writes the Current Slide # / Max Slide # to the DOM
// uses the previous image + 1 (because of the 0 index) as the Current Slide #
// uses data array length as the Max Slide #
function writeSlideNumber() {
  document.getElementsByTagName("h2")[0].innerHTML =
    (parseInt(previous_img.children[0].id) + 1 ) + " / " + (source_images.length);
};