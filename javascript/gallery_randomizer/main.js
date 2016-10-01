createEventListeners();
function $(text, item) {
  console.log(text + ":\t" + item)
  console.log(typeof(item))
}

// randNum returns a random number inclusive of min and max arguments.
// randNum(min *int, max *int)
function randNum(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

// randomizeValues returns array of randomized values from array data.
// randomizeValues(data *object, row_width *int, row = [] *object)
function randomizeValues(data, row_width, row = []) {
  // maps over a data array a number of times equal to the row_width
  // chooses a random value from the data
  data.slice(0, row_width).map(function(num) {
      row.push(data[randNum(0, data.length - 1)]);
  });

  return row;
}


// buildRow adds a random image row to the gallery until the # of rows
// matches the requested # of rows.
// buildRow(end *int, container *obj, data *obj, rows *int) => container *obj
function buildRow(acc, container, data, rows) {
  container.push(randomizeValues(data, rows));

  if(acc > 1) {
    buildRow(acc - 1, container, data, rows);
  }

  return container;
}

// createGallery creates the gallery with scaled images and
// writes the dimensions to the DOM.
// createGallery (date *arr, [columns *int, rows *int]) => buildRow *obj
function createGallery(data, [columns, rows]) {
  scaleImage(columns, 0.70);
  writeDims(rows, columns);
  return buildRow(rows, [], data, columns);
}

// createPics clears the image gallery, then
// creates and maps the randomized images to the gallery.
// createPics(files *object)
function createPics(images){
  var board = document.getElementById("img_board");
  while(board.firstChild) {
    board.removeChild(board.firstChild);
  }
 images.map(function(row) {
  row.map(function(image){
      var img = document.createElement("img");
      img.src = "img/" + image + ".jpg";
      img.className = "img-responsive";
      board.appendChild(img);
  })
 })
}

// scaleImage sets and appends responsive CSS image
// grid dimensions to the document head.
// scaleImage(columns *int, vert_scale *float) => HTML *obj
function scaleImage(columns, vert_scale) {
    var grid_scale = 100 / columns;
    var width = "img {width:" + grid_scale + "%;}";
    var height = "img {height:" + (grid_scale * vert_scale ) + "vw !important;}";
    return document.getElementsByTagName("style")[0].appendChild(document.createTextNode(width + height));
}

// writeDims writes the gallery dimensions to the DOM.
// writeDims(rows *int, columns *int) => [object HTMLCollection]
function writeDims(rows, columns) {
  var labels = document.getElementsByTagName("label");
  labels[0].innerHTML = "Columns" + "<h3>" + columns;
  labels[1].innerHTML = "Rows" + "<h3>" + rows;
  return labels;
}

// readDims returns an array containing the gallery dimensions.
// readDims("column" or "row") returns a specific integer dimension.
// readDims(dimension *string) => [object HTMLCollection] OR *int
function readDims(dimension) {
  if(dimension == "column") {
    return Number(readDims()[0].textContent);
  } else if (dimension == "row") {
    return Number(readDims()[1].textContent);
  }
  return document.getElementsByTagName("h3");
}

// prevent_neg_dims prevents board dimensions from scaling to less than 0.
// prevent_neg_dims(dimension *string, btn_id *string) => boolean
function prevent_neg_dims(dimension, btn_id) {
  return readDims(dimension) > 0 || btn_id.includes("plus");
}

// mutateDimensions mutates the gallery dimension based on the +/- DOM buttons
// inputs by creating a new gallery using new dimensions
// mutateDimensions(btn_id *string, mutation *int)
function mutateDimensions(btn_id, mutation) {
  if(btn_id.includes("col") && prevent_neg_dims("column", btn_id)) {
    return createPics(createGallery(src_imgs, [(readDims("column") + mutation), readDims("row")]));
  } else if(btn_id.includes("row") && prevent_neg_dims("row", btn_id)) {
    return createPics(createGallery(src_imgs, [readDims("column"), (readDims("row") + mutation)]))
  }
  return
}
