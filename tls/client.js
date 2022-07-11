"use strict";

const tls = require("tls");
const fs = require("fs");

const PORT = 8000;
const HOST = "0.0.0.0";

// Pass the certs to the server and let it know to process even unauthorized certs
const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
  rejectUnauthorized: false, // !do not do this in production
};

const client = tls.connect(PORT, HOST, options, () => {
  // check if the authorization worked
  if (client.authorized) {
    console.log("Connection authorized by a Certificate Authority");
  } else {
    console.log("Connection not authorized: " + client.authorizationError);
  }
  // send a friendly message
  client.write("I am the client sending you a message.");
});
client.on("data", (data) => {
  console.log(
    "Received: %s [it is %d bytes long]",
    data.toString().replace(/(\n)/gm, ""),
    data.length
  );
  client.end();
});

client.on("close", () => {
  console.log("Connection closed!");
});
// when an error occures, show it
client.on("error", (error) => {
  console.error(error);
  // close the connection after the error ocurred
  client.destroy();
});
