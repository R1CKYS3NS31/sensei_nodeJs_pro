const server = require("./httpAnalytics");

server.on("request", (method, url) => {
  // Since the server exported an event emitter, we can listen to it for changes:
  console.log(`Got a request: ${method} ${url}`);
});
