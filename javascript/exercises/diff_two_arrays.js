function diffArray(arr1, arr2) {
  var diffElements = []; //empty array to hold diff values
  var jointArr = arr1.concat(arr2).sort(ascSort);

  function ascSort(a, b) {
    return a - b;
  }

  //loops through the concatenated arr values
  //if value is not present in arr1 or arr2, it is pushed to diffElements
  for (var i in jointArr) {
    if (arr1.indexOf(jointArr[i]) === -1 || arr2.indexOf(jointArr[i]) === -1) {
      diffElements.push(jointArr[i]);
    }
  }
  return diffElements;
}

module.exports = diffArray;
