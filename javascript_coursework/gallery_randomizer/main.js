createEventListeners();

// randomizes numbers inclusive of min and max
function randNum(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

// returns array of randomized values from array data
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
  setImageWidth(board_width);

  for(var i = 0; i < board_height; i++) {
    board_array.push([]);
  }

  board_array.map(function(elem){
    elem.push(randomizeRow(data, board_width))
  })

  writeDimensions(board_height, "# of Rows", 0, "<h3>");
  writeDimensions(board_width, "# of Columns", 1,  "<h3>")

  return board_array;
}

function createPictures(files){
  var img_board = document.getElementById("img_board");
  img_board.innerHTML = "";
  var img;

 files.map(function(i) {
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

// sets CSS image width for responsive grid images
function setImageWidth(width) {
    var img_style = document.createElement("style");
    var img_width = document.createTextNode("img {width:" + (100 / width) + "%;}");
    var img_height = document.createTextNode("img {height:" + ((100 / width) * 0.70 ) + "vw !important;}");
    img_style.appendChild(img_height);
    img_style.appendChild(img_width);
    document.head.appendChild(img_style);
}

// writes current gallery dimensions to the DOM
function writeDimensions(dimension, label_title, label_num, new_elem) {
  var labels = document.getElementsByTagName("label");
  labels[label_num].innerHTML = label_title + " " + new_elem + dimension
  labels[label_num].style.textAlign = "center";

}

// returns an array of the photo gallery dimensions
// returns => [rows, columns]
function getDimensions() {
  return Array.from([document.getElementsByTagName("h3")[0].textContent,
    document.getElementsByTagName("h3")[1].textContent]);
}

// mutates the gallery dimensions according to +/- buttons
function mutateCol(mutation) {
  createPictures(createBoard(source_images, [(parseInt(getDimensions()[1]) + mutation), getDimensions()[0]]))
}

// mutates the gallery dimensions according to +/- buttons
function mutateRow(mutation) {
  createPictures(createBoard(source_images, [getDimensions()[1], (parseInt(getDimensions()[0]) + mutation)]))
}