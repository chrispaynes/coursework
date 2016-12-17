function titleCase(str) {
  let word_array = [];

  str.toLowerCase().split(' ').map(word => word_array.push(capitalize(word)));

  return word_array.join(' ');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

module.exports = titleCase;
