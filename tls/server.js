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
const server = tls.createServer(options,(socket)=>{
    // send a friendly message
    socket.write('I am sending you a message.')

    // print the data that we received
    socket.on('data', (data)={
        
    })
})
