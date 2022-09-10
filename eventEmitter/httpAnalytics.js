// HTTP Analytics through an Event Emitter
const EventEmitter = require("events");
const serverEvents = new EventEmitter();

// set up an http server
const http = require("http");
const httpServer = http.createServer((req, res) => {
  // handle the request...then emit an event about what happened
  serverEvents.emit("request", req.method, res.url);
});

// expose the event emitter
module.exports = serverEvents;
