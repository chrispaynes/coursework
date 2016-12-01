function bouncer(arr) {
  return arr.filter(function(value) {
    return Boolean(value);
  });
}

module.exports = bouncer;
