const env = require('../env');
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
  if (message.text.toLowerCase().includes('iris')) {
    nlp.ask(message.text, (err, res) => {
      if (err) {
        return;
      }

      try {
        if (!res.intent || !res.intent[0] || !res.intent[0].value) {
          throw new Error('Could not extract intent');
        }

        // pair the response intent with it's corresponding codebase
        const intent = require('../intents/' + res.intent[0].value + 'Intent');

        intent.process(res, (error, response) => {
          if (error) {
            return;
          }

          rtm.sendMessage(response, message.channel);
        });

      } catch (err) {
        rtm.sendMessage("Sorry, I don't understand what you're asking", message.channel);
      }

      if (!res.intent) {
        rtm.sendMessage("Sorry I don't understand", message.channel);
      } else if (res.intent[0].value === 'time' && res.location) {
        rtm.sendMessage(`I don't know the time in ${res.location[0].value}`, message.channel);
      } else {
        rtm.sendMessage("Sorry I don't understand", message.channel);
      }
    });
  }
}

// addAuthenticatedHandler adds an event handler function
// when the client emits an RTM.AUTHENTICATED event.
function addAuthenticatedHandler(rtm, handler) {
  rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, handler);
}

// init initializes and returns a new slack client with
// authentication event handling and message handling.
module.exports.init = (botToken, logLevel, nlpClient) => {
  rtm = new RtmClient(botToken, { logLevel });
  nlp = nlpClient;
  addAuthenticatedHandler(rtm, handleOnAuthenticated);
  rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage);
  return rtm;
};

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;
