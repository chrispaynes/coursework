function fearNotLetter(str) {
  var letter_before_gap = findLetterBeforeGap(str)
  return letter_before_gap ? String.fromCharCode(letter_before_gap.charCodeAt(0) + 1) : undefined;
}

function findLetterBeforeGap(word) {
  return word.split('').find(function(letter, index, array) {
    if (Boolean(array[index + 1]) && array.indexOf(String.fromCharCode(letter.charCodeAt(0) + 1)) === -1) {
      return letter;
    }
  });
}

module.exports = fearNotLetter;
