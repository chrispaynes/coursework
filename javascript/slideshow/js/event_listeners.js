function setEvtListen() {
  // initializes the page with 3 focal slides
  initSlides();
  // constants for left and right navigation buttons
  const ln = document.getElementById("left_nav");
  const rn = document.getElementById("right_nav");
  // mutation functions for left and right navigation buttons
  var minus1 = function() { main_rotate(setFocalImages(), -1) };
  var plus1 = function() { main_rotate(setFocalImages(), 1) };

  // listens for event activity on non IE Browsers
  if(window.addEventListener) {
    ln.addEventListener("click", minus1, false);
    rn.addEventListener("click", plus1, false);
  }

  // listens for events on older IE Browsers
  if(window.attachEvent) {
    ln.addEventListener("click", minus1);
    rn.addEventListener("click", plus1);
  }
}

// listens for page load to register event listeners
if(window.addEventListener) {
  window.addEventListener("load", setEvtListen, false);
}
// listens for page load to register event listeners on older IE Browsers
if(window.attachEvent) {
  window.attachEvent("onload", setEvtListen);
}