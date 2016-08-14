var previous_image = document.getElementById("prev_img");
var current_image = document.getElementById("current_img");
var next_image = document.getElementById("next_img");

var slideshow_images = [previous_image, current_image, next_image];

function initSlideShow() {
  for(var i in slideshow_images) {
    slideshow_images[i].children[0].id = i;
    slideshow_images[i].children[0].src = "img/" + source_images[i] + ".jpg";
  }
  writeSlideNumber()
}

function setCurrentImage() {
 document.getElementById("img_1").children[0].getAttribute("src") = imgs[0];
 console.log("new image!");
}

function writeSlideNumber() {
  document.getElementsByTagName("h2")[0].innerHTML = (parseInt(previous_image.children[0].getAttribute("id")) + 1 ) + " / " + (source_images.length);
};