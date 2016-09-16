createEventListeners();

// randNum returns a random number between and
// inclusive of min and max arguments
// randNum(min *int, max *int)
function randNum(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

// randomizeRow returns array of randomized values from array data
// randomizeRow(data *object, row_width *int, row = [] *object)
function randomizeRow(data, row_width, row = []) {
  // if the number of elements is less than the row_width
  // append randomized data array values to the array
  // until the data array is long enough
  for(var i = 0; data.length < row_width; i++) {
    data.push(data[randNum(0, data.length - 1)]);
  }

  // maps over a data array a number of times equal to the row_width
  // chooses a random value from the data
  data.slice(0, row_width).map(function(num) {
      row.push(data[randNum(0, data.length - 1)]);
  });

  return row;
}

// creates (board_width x board_height) size array
function createBoard(data, [board_width, board_height], board_array = []) {
  setImage(board_width, 0.70);

  for(var i = 0; i < board_height; i++) {
    board_array.push([]);
  }

  board_array.map(function(elem){
    elem.push(randomizeRow(data, board_width))
  })

  writeDims(board_height, "# of Rows", 0, "<h3>");
  writeDims(board_width, "# of Columns", 1,  "<h3>")

  return board_array;
}

// createBoard finds the DOM's #img_board, clears out its innerHTML
// and maps randomized rows of array elements as images to #img_board
// createPictures(files *object)
function createPictures(f){
  var img_board = document.getElementById("img_board");
  img_board.innerHTML = "";
  var img;

 f.map(function(i) {
  i.map(function(j){
    j.map(function(k){
      img = document.createElement("img");
      img.src = "img/" + k + ".jpg";
      img.className = "img-responsive";
      img_board.appendChild(img);
    })
  })
 })
}

// setImage sets the CSS image dimensions for responsive grid images
// and appends the CSS style to the document.head.To evenly distribute
// images, the image width is 100% divided by #items. The height is
// based on the scale argument
// setImage(w *int, scale *float)
function setImage(w, scale) {
    var img_style = document.createElement("style");
    var img_width = document.createTextNode("img {width:" + (100 / w) + "%;}");
    var img_height = document.createTextNode("img {height:" + ((100 / w) * scale ) + "vw !important;}");
    img_style.appendChild(img_height);
    img_style.appendChild(img_width);
    document.head.appendChild(img_style);
}

// writeDims writes the current gallery dimensions to the DOM
// writeDims(dim *int, l_title *string, l_num *int, new_elem *string)
function writeDims(dim, l_title, l_num, new_elem) {
  var l = document.getElementsByTagName("label");
  l[l_num].innerHTML = l_title + " " + new_elem + dim
}

// getDims returns an array containing the gallery dimensions
// returns: [# rows, # columns]
function getDims() {
  return Array.from([document.getElementsByTagName("h3")[0].textContent,
    document.getElementsByTagName("h3")[1].textContent]);
}

// mutateCol accepts a positive or negative integer value from
// the +/- DOM buttons and creates a new gallery board using
// the mutated column dimemsions
// mutateCol(mutation *int)
function mutateCol(mut) {
  createPictures(createBoard(src_imgs, [(parseInt(getDims()[1]) + mut), getDims()[0]]))
}

// mutateCol accepts a positive or negative integer value from
// the +/- DOM buttons and creates a new gallery board using
// the mutated row dimemsions
// mutateCol(mut *int)
function mutateRow(mut) {
  createPictures(createBoard(src_imgs, [getDims()[1], (parseInt(getDims()[0]) + mut)]))
}