"use strict";

const tls = require("tls");
const fs = require("fs");

const PORT = 8000;
const HOST = "0.0.0.0";

// tls server authentication
const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
};

// server
const server = tls.createServer(options, (socket) => {
  // send a friendly message
  socket.write("I am sending you a message.");

  // print the data that we received
  socket.on("data", (data) => {
    console.log(
      "Received: %s [it is %d bytes long]",
      data.toString().replace(/(\n)/gm, ""),
      data.length
    );
  });
  //   let us know when the transmission is over
  socket.on("end", () => {
    console.log("EOT (End Of Transmission)");
  });
});
// start listening on a specific port and address
server.listen(PORT, HOST, () => {
  console.log("listening at http://%s:%s", HOST, PORT);
});
// when an error occurs, show it
server.on("error", () => {
  console.error(error);
  // close the connection after the error occurred.
  server.destroy();
});
