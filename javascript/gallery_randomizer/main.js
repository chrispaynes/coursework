createEventListeners();

var DOC = document;

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

function build_rows(start, end, container, data, rows) {
  // container.push adds a random row of images to the gallery.
  container.push(randomizeRow(data, rows));

  if(start < end -1) {
    build_rows(start + 1, end, container, data, rows);
  }
  return container;
}

// creates (board_width x board_height) size array
function createBoard(data, [columns, rows]) {
  scaleImage(columns, 0.70);
  writeDims(rows, columns);
  return build_rows(0, rows, [], data, columns);
}

// createBoard finds the DOM's #img_board, clears out its innerHTML
// and maps randomized rows of array elements as images to #img_board
// createPics(files *object)
function createPics(f){
  var img;

 f.map(function(row) {
  row.map(function(image){
      img = document.createElement("img");
      img.src = "img/" + image + ".jpg";
      img.className = "img-responsive";
      document.getElementById("img_board").appendChild(img);
  })
 })
}

// scaleImage sets the CSS image dimensions for responsive grid images
// and appends the CSS style to the document.head.To evenly distribute
// images, the image width is 100% divided by #items. The height is
// based on the scale argument
// scaleImage(columns *int, vert_scale *float)
function scaleImage(columns, vert_scale) {
    var grid_scale = 100 / columns;
    var width = "img {width:" + grid_scale + "%;}";
    var height = "img {height:" + (grid_scale * vert_scale ) + "vw !important;}";
    document.getElementsByTagName("style")[0].appendChild(document.createTextNode(width + height));
}

// writeDims(rows *int, columns *int)
function writeDims(rows, columns) {
  var labels = document.getElementsByTagName("label");
  labels[0].innerHTML = "# of Columns" + "<h3>" + columns;
  labels[1].innerHTML = "# of Rows" + "<h3>" + rows;
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
  return createPics(createBoard(src_imgs, newDimensions))
}
