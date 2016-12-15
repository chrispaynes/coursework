function steamrollArray(arr) {
  let flatArr = [];

  let flatten = (arg) => {
    if (!Array.isArray(arg)) {
      flatArr.push(arg);
    } else {
      arg.map(el => flatten(el))
    }
  }

  flatten(arr);
  return flatArr;
}

module.exports = steamrollArray;
