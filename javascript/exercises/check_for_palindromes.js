function palindrome(str) {
  alphanumeric_string = str.toLowerCase().replace(/[\s\W\_]/gmi, "");

  return alphanumeric_string === alphanumeric_string.split("").reverse().join("");
}

module.exports = palindrome;
