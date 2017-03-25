"use strict";

const slackClient = require("../server/slackClient");
const service = require("../server/service");
const http = require("http");
const server = http.createServer(service);

const witToken = process.env.WIT_TOKEN || '';
const witClient = require("../server/witClient.js")(witToken);

const botToken = process.env.SLACK_BOT_TOKEN || '';
const logLevel = "verbose";
const rtm = slackClient.init(botToken, logLevel, witClient);

// Starts the Real-Time Messaging (RTM) service.
rtm.start();

// slackClient.addAuthenticatedHandler starts the express server upon rtm authentication. 
slackClient.addAuthenticatedHandler(rtm, () => server.listen(3000));

server.on("listening", () => {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get("env")} mode.`)
});
