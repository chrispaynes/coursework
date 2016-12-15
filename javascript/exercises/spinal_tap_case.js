function spinalCase(str) {
  let lower = (regex_match) => ' ' + regex_match.toLowerCase()

  return str.replace(/[A-Z]/g, lower)
    .replace(/^\s/, '')
    .replace(/\s{2}/, ' ')
    .replace(/([\s,\_])/gm, '-')
    .replace(/\-{2}/g, '-');
}

module.exports = spinalCase;
