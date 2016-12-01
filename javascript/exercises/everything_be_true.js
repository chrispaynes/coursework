function truthCheck(collection, property) {
  return collection.every(function returnTruthy(value) {
    return Boolean(value[property]);
  });
}

module.exports = truthCheck;
