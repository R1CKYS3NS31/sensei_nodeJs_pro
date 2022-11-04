const https = require("https");
const fs = require("fs");

// optional
const http = require('http')

const httpsOptions = {
  key: fs.readFileSync("ca-key.pem"), // path to server-key.pem
  cert: fs.readFileSync("cert.pem"), // path to server-cert.pem
};
const app = (req, res) => {
  res.writeHead(200);
  res.end("Hello https sensei\n");
};

https.createServer(httpsOptions, app).listen(4000);
// if you also want to support http request
http.createServer(app).listen(8000)
// ricky has bugs