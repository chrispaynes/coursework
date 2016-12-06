function largestOfFour(collection) {
  function sortDescending(a, b) {
    return b - a;
  }

  return collection.map(function(subArray) {
    return (subArray.sort(sortDescending)[0]);
  });
}

module.exports = largestOfFour;
