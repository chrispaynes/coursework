function binaryAgent(str) {
  return str.split(' ').map((word) => bitStringToChar(word)).join("");
}

function bitStringToChar(bitstring) {
  return String.fromCharCode(reduceBitstringToDecimal(bitstring));
}

function reduceBitstringToDecimal(numbers) {
  let sum = 0;

  numbers.split('').map((number, index) => {
    if (numbers.length === 1 && parseInt(numbers[0]) === 1) {
      sum += Math.pow(2, index);
    } else if (numbers.length > 1 && parseInt(number) == 1) {
      sum += Math.pow(2, numbers.length - (index + 1));
    }
  });

  return sum;
}

module.exports = { binaryAgent, bitStringToChar, reduceBitstringToDecimal };
