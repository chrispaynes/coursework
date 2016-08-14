window.addEventListener("load", initSlideShow, false)
document.getElementById("left_nav").addEventListener("click",
  function() { rotate(decrementId); }, false);
document.getElementById("right_nav").addEventListener("click",
  function() { rotate(incrementId); }, false);
