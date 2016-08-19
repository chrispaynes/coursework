window.addEventListener("load", initSlideShow, false)

document.getElementById("left_nav").addEventListener("click",
  function() {
    rotate(SLIDESHOW_IMAGES, -1);
  }, false);

document.getElementById("right_nav").addEventListener("click",
  function() {
    rotate(SLIDESHOW_IMAGES, 1);
  }, false);
