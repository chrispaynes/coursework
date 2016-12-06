function repeatStringNumTimes(str, num) {
  var repeatArr = [];

  if (num >= 1) {
    for (var i = 0; i < num; i++) {
      repeatArr.push(str);
    }
    return repeatArr.join("");
  } else {
    return "";
  }
}

module.exports = repeatStringNumTimes;
