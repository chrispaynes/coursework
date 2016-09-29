// mListen registers a DOM element by Id to listen for an event type
// and call a mutation function using a specified mutation argument
// mListen(id *string, event *string, fn_call *function, mutation *int)
function mListen(id, evt, func, mut) {
  if(window.addEventListener) {
    document.getElementById(id).addEventListener(evt, function() { func(id, mut), false });
  }
  if(window.attachEvent) {
      document.getElementById(id).attachEvent(evt, function() { func(id, mut), false });
  }
}

function createEventListeners() {
  window.addEventListener("load", createPics(createBoard(src_imgs, [randNum(3, 5), randNum(3, 5)])), false);

  // mListen creates event listener for +/- row and column mutation buttons
  mListen("randomizer_btn", "click", function() { createPictures(createBoard(src_imgs, [randNum(2, 6), randNum(2, 5)])) })
  mListen("col_minus", "click", mutateDimensions, -1)
  mListen("col_minus", "click", mutateDimensions, -1)
  mListen("col_plus", "click", mutateDimensions, 1)
  mListen("row_minus", "click", mutateDimensions, -1)
  mListen("row_plus", "click", mutateDimensions, 1)
}
