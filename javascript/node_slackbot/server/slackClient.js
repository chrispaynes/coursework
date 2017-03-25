"use strict";

require("../env");
const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;
let rtm = null;
let nlp = null;

// handleOnAuthenticated logs initial Real-Time Messaging (RTM) starting data.
function handleOnAuthenticated(rtmStartData) {
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name} but not yet connected to a channel`);
}

// handleOnMessage handles incoming messages.
function handleOnMessage(message) {
  nlp.ask(message.text, (err, res) => {
    if(err) {
      console.log(err);
      return;
    }
    if(!res.intent) {
      rtm.sendMessage("Sorry I don't understand", message.channel)
    } else if(res.intent[0] == "time" && res.location) {
      rtm.sendMessage(`I don\'t know the time in ${res.location[0].value}`, message.channel)
    } else {
      rtm.sendMessage("Sorry I don't understand", message.channel)
    }
  });
}

// addAuthenticatedHandler adds an event handler function
// when the client emits an RTM.AUTHENTICATED event.
function addAuthenticatedHandler(rtm, handler) {
  rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, handler)
}

// init initializes and returns a new slack client with
// authentication event handling and message handling.
module.exports.init = (botToken, logLevel, nlpClient) => {
  rtm = new RtmClient(botToken, { logLevel: logLevel });
  nlp = nlpClient
  addAuthenticatedHandler(rtm, handleOnAuthenticated);
  rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage);
  return rtm;
};

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;
