module.exports.process = function process(intentData, cb) {
  if (intentData.intent[0].value !== 'time') {
    return cb(new Error(`Expected a time intent but received ${intentData.intent[0].value}`));
  }

  if (!intentData.location) {
    return cb(new Error('Missing location in time intent'));
  }

  return cb(false, `I don't know the time in ${intentData.location[0].value}`);
};