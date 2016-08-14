var previous_img = document.getElementById("previous_img");
var current_img = document.getElementById("current_img");
var next_img = document.getElementById("next_img");
var slideshow_images = [previous_img, current_img, next_img];

// initializes the slideshow with the first 3 values of the slideshow images array
function initSlideShow() {
  slideshow_images.map(function(i) {
    i.children[0].id = slideshow_images.indexOf(i);
    i.children[0].src = "img/" + source_images[slideshow_images.indexOf(i)] + ".jpg";
  });

  writeSlideNumber()
}

function writeSlideNumber() {
  document.getElementsByTagName("h2")[0].innerHTML = (parseInt(previous_img.children[0].getAttribute("id")) + 1 ) + " / " + (source_images.length);
};