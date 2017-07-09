const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');
const witClient = require('../server/witClient.js')(process.env.WIT_TOKEN || '');

const server = http.createServer(service);
const botToken = process.env.SLACK_BOT_TOKEN || '';
const logLevel = 'verbose';
const rtm = slackClient.init(botToken, logLevel, witClient);

function start(port, client_service) {
  // Starts the Real-Time Messaging (RTM) service.
  rtm.start();

  // slackClient.addAuthenticatedHandler starts the express server upon rtm authentication.
  slackClient.addAuthenticatedHandler(rtm, () => server.listen(port));

  server.on('listening', () => {
    console.log(`${client_service} is listening on ${server.address().port} in ${service.get('env')} mode.`);
  });
}

process.argv.indexOf('-irisTime') !== -1 ? start(3010, "irisTime") : start(3000, "iris");
