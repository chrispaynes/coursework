function translatePigLatin(str) {
  let firstVowelIndex = str.indexOf(str.match(/[aeiou]/gmi)[0]);

  //slices off first consonants, concats consonants to end of string and concats suffix to end of string  
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + findSuffix(firstVowelIndex);
}

function findSuffix(firstVowelIndex) {
  return firstVowelIndex === 0 ? "way" : "ay"
}

module.exports = translatePigLatin;
