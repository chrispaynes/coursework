"use strict";

require("../env");
const RtmClient = require('@slack/client').RtmClient;
const CLIENT = require('@slack/client').CLIENT_EVENTS;

// handleOnAuthenticated logs initial Real-Time Messaging (RTM) starting data.
function handleOnAuthenticated(rtmStartData) {
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name} but not yet connected to a channel`);
}

// addAuthenticatedHandler adds an event handler function when the client emits an RTM.AUTHENTICATED event.
function addAuthenticatedHandler(rtm, handler) {
    rtm.on(CLIENT.RTM.AUTHENTICATED, handler)
}

module.exports.init = (botToken, logLevel) => {
    const rtm = new RtmClient(botToken, { logLevel: logLevel });
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    return rtm;
};