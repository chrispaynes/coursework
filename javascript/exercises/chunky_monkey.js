function chunkArrayInGroups(arr, size) {
  var arrayChunks = [];
  var numOfFullChunks = Math.ceil(arr.length / size);

  for (var i = 0; i < numOfFullChunks; i++) {
    arrayChunks.push(arr.slice(i * size, size + (i * size)));
  }
  return arrayChunks;
}

module.exports = chunkArrayInGroups;
