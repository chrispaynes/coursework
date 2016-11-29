function pairElement(str) {
  const basePairLookup = { "A": "T", "T": "A", "C": "G", "G": "C" };
  var basePairs = [];

  str.split("").map(function(letter, index) {
    basePairs.push(new Array(letter));
    basePairs[index].push(basePairLookup[letter])
  })

  return basePairs;
}

module.exports = pairElement;
