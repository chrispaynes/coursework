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

  writeDims(board_height, "# of Rows", 0);
  writeDims(board_width, "# of Columns", 1)

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

// writeDims writes gallery dimensions to the DOM.
// writeDims(dim *int, header *string, label_num *int)
function writeDims(dim, header, label_num) {
  return document.getElementsByTagName("label")[label_num].innerHTML = header + "<h3>" + dim;
}

// getDims returns an array containing the gallery dimensions
// returns: [# rows *int, # columns *int]
function getDims(dimension) {
  var row_dim = Number(document.getElementsByTagName("h3")[0].textContent);
  var column_dim = Number(document.getElementsByTagName("h3")[1].textContent);

  if(dimension == "column") {
    return column_dim;
  } else if (dimension == "row") {
    return row_dim;
  } else {
    return Array.from([row_dim, column_dim])
  }
  // return Array.from([Number(document.getElementsByTagName("h3")[0].textContent),
  //   Number(document.getElementsByTagName("h3")[1].textContent)]);
}

// mutateDimensions mutates the gallery dimension based on the +/- DOM buttons
// inputs by creating a new gallery using new dimensions
// mutateDimensions(btn_id *string, mutation *int)
function mutateDimensions(btn_id, mutation) {
  if(btn_id.includes("col")) {
    newDimensions = [(getDims("column") + mutation), getDims("row")]
  } else if(btn_id.includes("row")) {
    newDimensions = [getDims("column"), (getDims("row") + mutation)]
  }
  console.log( newDimensions)
  createPics(createBoard(src_imgs, newDimensions))
}
