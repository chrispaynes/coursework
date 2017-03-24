"use strict";

const slackClient = require("../server/slackClient");
const service = require("../server/service");
const http = require("http");
const server = http.createServer(service);
const botToken = process.env.SLACK_BOT_TOKEN || '';
const logLevel = "verbose";
const rtm = slackClient.init(botToken, logLevel);

// Starts the Real-Time Messaging (RTM) service
rtm.start();

server.listen(3000);
server.on("listening", () => {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get("env")} mode.`)
});