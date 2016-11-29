function diffArray(arr1, arr2) {
  var concatArray = arr1.concat(arr2).sort(ascSort);

  return concatArray.filter(function(element) {
    if (arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1) {
      return element;
    }
  });

}

function ascSort(a, b) {
  return a - b;
}

module.exports = diffArray;
