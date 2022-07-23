const http = require("http");

const startServer = () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Hello http");
  });
  server.listen(8000);
};

if (!module.parent) {
  // Start server if file is run directly
  startServer();
} else {
  // Export server, if file is referenced via cluster
  module.exports = startServer;
}
