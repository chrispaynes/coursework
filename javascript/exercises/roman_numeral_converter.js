function convertToRoman(num) {
  const CIPHER = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  var roman_numeral_string = ""; //returns the roman num as a string

  Object.keys(CIPHER).forEach(key => {
    while (num >= CIPHER[key]) {
      roman_numeral_string += key;
      num -= CIPHER[key];
    };
  });

  return roman_numeral_string;
}

module.exports = convertToRoman;
