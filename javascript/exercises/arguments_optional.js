function addTogether(a) {
  let sum = 0;
  const args = arguments;

  for (var keys in args) {
    if (typeof(args[keys]) !== "number") {
      return undefined;
    } else {
      sum += args[keys];
    }
  }

  if (!args[1]) {
    return function(closureArg) {
      return a + closureArg;
    };
  }

  return sum
}

module.exports = addTogether;
