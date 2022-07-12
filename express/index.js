// Import the top-level function of express
const express = require("express");

// Creates an Express application using the top-level function
const app = express();

// Define port number as 3000
const port = 3000;

// static files
app.use(express.static("public"));
app.use(express.static("images"));
app.use(express.static("files"));

// handle error, print stacktrace
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: err,
  });
});

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get("/", function (request, response) {
  response.send("Hello, World!");
});

//GET /names/john
app.get("/names/:name", function (req, res, next) {
  if (req.params.name == "john") {
    return res.send("Valid Name");
  } else {
    next(new Error("Not valid name"));
    //pass to error handler
  }
});

//error handler
app.use(function (err, req, res, next) {
  console.log(err.stack);
  // e.g., Not valid name
  return res.status(500).send("Internal Server Occurred");
});

// execute code before any req and after any res
app.use(function (req, res, next) {
  function afterResponse() {
    res.removeListener("finish", afterResponse);
    res.removeListener("close", afterResponse);
    // actions after response
  }
  res.on("finish", afterResponse);
  res.on("close", afterResponse);
  // action before request
  // eventually calling `next()`
  next();
});

// Make the app listen on port 3000
app.listen(port, function () {
  console.log("Server listening on http://localhost:" + port);
});
