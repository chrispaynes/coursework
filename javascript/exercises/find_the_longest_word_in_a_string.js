function findLongestWord(str) {
  return str.split(" ").sort(function(word1, word2) {
    return word1.length < word2.length
  })[0].length;
}

module.exports = findLongestWord;
