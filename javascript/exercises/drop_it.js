function dropElements(arr, func) {
  var filtered = arr;

  while (!func(arr[0]) && arr.length > 0) {
    filtered.shift();
  }

  return filtered;
}

module.exports = dropElements;
