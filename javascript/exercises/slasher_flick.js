function slasher(arr, howMany) {
  return arr.length < howMany ? [] : arr.slice(howMany);
}

module.exports = slasher;
