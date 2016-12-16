function sumAll(arr) {
  arr.sort((a, b) => a - b);

  const MIN = arr[0] + 1;
  const MAX = arr[arr.length - 1];

  for (let i = MIN; i < MAX; i++) {
    arr.push(i);
  }

  return arr.reduce((acc, current_val) => acc + current_val);
}

module.exports = sumAll;
