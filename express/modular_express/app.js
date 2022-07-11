const express = require("express");

// modules
const greetMiddleware = require("./greet");

const app = express();

app.use("/api/v1", greetMiddleware({ greeting: "Hello, Ricky!" })).listen(8000);
