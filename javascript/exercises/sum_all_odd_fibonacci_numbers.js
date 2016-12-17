function sumFibs(num) {
  let fib_sum = 0;
  let previous = 0;
  let current = 1;
  let sum = 0;

  while (current <= num) {
    sum = current + previous;
    previous = current;
    current = sum;

    previous % 2 !== 0 ? fib_sum += previous : 0;
  }

  return fib_sum;
}

module.exports = sumFibs;
