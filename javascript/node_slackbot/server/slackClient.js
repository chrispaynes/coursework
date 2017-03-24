"use strict";

require("../env");
const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
let rtm = null;

// handleOnAuthenticated logs initial Real-Time Messaging (RTM) starting data.
function handleOnAuthenticated(rtmStartData) {
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name} but not yet connected to a channel`);
}

// handleOnMessage handles incoming messages.
function handleOnMessage(message) {
    console.log(message);

    rtm.sendMessage("Hello!", message.channel);

}

// addAuthenticatedHandler adds an event handler function
// when the client emits an RTM.AUTHENTICATED event.
function addAuthenticatedHandler(rtm, handler) {
    rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, handler)
}

// init initializes and returns a new slack client with
// authentication event handling and message handling.
module.exports.init = (botToken, logLevel) => {
    rtm = new RtmClient(botToken, { logLevel: logLevel });
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage);
    return rtm;
};

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;