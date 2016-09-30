createEventListeners();

// randNum returns a random number inclusive of min and max arguments.
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

  writeDims(board_width, board_height);
  return board_array;
}

// createBoard finds the DOM's #img_board, clears out its innerHTML
// and maps randomized rows of array elements as images to #img_board
// createPics(files *object)
function createPics(f){
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

// writeDims(rows *int, columns *int)
function writeDims(rows, columns) {
  document.getElementsByTagName("label")[0].innerHTML = "# of Columns" + "<h3>" + columns;
  document.getElementsByTagName("label")[1].innerHTML = "# of Rows" + "<h3>" + rows;
}

// readDims() returns an array containing the gallery dimensions.
// readDims("column"/"row") returns a specific dimension as an integer.
// returns: [# rows *int, # columns *in]
function readDims(dimension) {
  if(dimension == "column") {
    return Number(readDims()[0].textContent);
  } else if (dimension == "row") {
    return Number(readDims()[1].textContent);
  }
  return document.getElementsByTagName("h3");
}

// mutateDimensions mutates the gallery dimension based on the +/- DOM buttons
// inputs by creating a new gallery using new dimensions
// mutateDimensions(btn_id *string, mutation *int)
function mutateDimensions(btn_id, mutation) {
  if(btn_id.includes("col")) {
    newDimensions = [(readDims("column") + mutation), readDims("row")]
  } else if(btn_id.includes("row")) {
    newDimensions = [readDims("column"), (readDims("row") + mutation)]
  }
  createPics(createBoard(src_imgs, newDimensions))
}
