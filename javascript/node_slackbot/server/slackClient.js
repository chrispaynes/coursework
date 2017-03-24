"use strict";

require("../env");
const RtmClient = require('@slack/client').RtmClient;

module.exports.init = (botToken, logLevel) => {
    const rtm = new RtmClient(botToken, {logLevel: "debug"});
    return rtm;
};