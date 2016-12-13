function myReplace(str, before, after) {
  const CAPITAL_LETTER = { "min": 65, "max": 90 };

  var matchCaps = () => {
    if (before.charCodeAt(0) >= CAPITAL_LETTER.min && before.charCodeAt(0) <= CAPITAL_LETTER.max) {
      return after[0].toUpperCase() + after.slice(1);
    }
    return after;
  }

  return str.replace(new RegExp(before), matchCaps());
}

module.exports = myReplace;
