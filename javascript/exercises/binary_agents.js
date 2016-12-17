function binaryAgent(str) {
  var engSent = "";
  var sentence = "";
}


function bitStringToLetter(bString) {
  var indices;
  bString.split(" ").map(function(x) {
    indices = [];
    var array = x;
    var element = '1';
    var idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx - 1);
      idx = array.indexOf(element, idx + 1);
    }

  });
  return String.fromCharCode(reducePowersArray(indices))
}

// bitStringToLetter("01000001")

function bitStringToWord(bString) {
  bstring.split(" ").map(function(x) {
    console.log(x)
  })
}

// reducePowersArray([0, 6])
function reducePowersArray(powersArray) {
  return powersArray.reduce(function(a, b) {
    return Math.pow(2, a) + Math.pow(2, b);
  })
}

module.exports = binaryAgent;
