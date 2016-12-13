function uniteUnique(arr1, arr2, arr3) {
  const ARGSV = Array.prototype.slice.call(arguments);
  let duplicates = (element, index, array) => array.indexOf(element) === index;

  return ARGSV.reduce((a, b) => a.concat(b)).filter(duplicates);
}

module.exports = uniteUnique;
