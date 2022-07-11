const http = require("http");

// routes object
var routes = {
  "/": (index = (req, res) => {
    res.writeHead(200);
    res.end("Hello,Ricky!");
  }),
  "/home": (home = (req, res) => {
      res.writeHead(200)
      res.end('Welcome home!')
  }),
};

// port
const port = 8000;

http
  .createServer((req, res) => {
    if (req.url in routes) {
      return routes[res.url](req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
  })
  .isten(port, () => {
    console.log("Server listening on http://localhost:" + port);
  });
