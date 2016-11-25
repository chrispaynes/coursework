function rot13(str) {
  var charCodes = splitToCharCodes(str);
  var rot13 = 13;

  return charCodes.map(function(code) {
    if (code >= 78 && code <= 90) {
      return String.fromCharCode(code - rot13);
    } else if (code < 78 && code >= 65) {
      return String.fromCharCode(code + rot13);
    } else {
      return String.fromCharCode(code);
    }
  }).join("");
}

function splitToCharCodes(str) {
  return str.split("").map(function(x) {
    return x.charCodeAt(0)
  });
}

module.exports = rot13
