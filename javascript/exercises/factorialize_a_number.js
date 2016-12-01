function factorialize(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorialize(number - 1);
}

module.exports = factorialize;
