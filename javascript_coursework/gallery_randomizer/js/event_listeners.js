// creates event listener for mutation buttons
function mutationListener(id, event, fn_call, mutation) {
  document.getElementById(id).addEventListener(event, function() { fn_call(mutation), false });
}

function createEventListeners() {
  window.addEventListener("load", createPictures(createBoard(source_images, [randNum(3, 5), randNum(3, 5)])), false);

  mutationListener("randomizer_btn", "click", function() { createPictures(createBoard(source_images, [randNum(2, 6), randNum(2, 5)])) })
  mutationListener("col_minus", "click", mutateCol, -1)
  mutationListener("col_plus", "click", mutateCol, 1)
  mutationListener("row_minus", "click", mutateRow, -1)
  mutationListener("row_plus", "click", mutateRow, 1)
}