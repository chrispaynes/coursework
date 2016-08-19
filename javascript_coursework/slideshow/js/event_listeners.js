window.addEventListener("load", initSlideShow, false)

document.getElementById("left_nav").addEventListener("click",
  function() {
    rotate(decrementId, SLIDESHOW_IMAGES);
  }, false);

document.getElementById("right_nav").addEventListener("click",
  function() {
    rotate(incrementId, SLIDESHOW_IMAGES);
  }, false);
