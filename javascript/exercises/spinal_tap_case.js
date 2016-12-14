function capitalize(match, p1, offset, string) {
  return " " + match.toLowerCase();
}

function spinalCase(str) {
  return str.replace(/[A-Z]/g, capitalize).replace(/\s\s/, " ").replace(/^\s/, "").replace(/([\s,\_])/gm, '-').replace(/\-\-/g, "-");
}

module.exports = spinalCase;
