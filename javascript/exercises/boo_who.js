function booWho(bool) {
  return typeof(bool) === bool || bool === false || bool === true;
}

module.exports = booWho;
