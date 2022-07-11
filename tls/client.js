"use strict";

const tls = require("tls");
const fs = require("fs");

const PORT = 8080;
const HOST = "0.0.0.0";

// Pass the certs to the server and let it know to process even unauthorized certs
const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("public-cert.pem"),
  rejectUnauthorized: false, // !do not do this in production
};

const client = tls.connect(PORT,HOST,options,()=>{
    // check if the authorization worked
    if (client.authorized) {
        console.log('Connection authorized by a Certificate Authority');
    }else{
        console.log('Connection not authorized: '+client.authorizationError);
    }
    // send a friendly message
    client.write('I am the client sending you a message.')
})
client
