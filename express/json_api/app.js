const express = require("express");
const cors = require("cors"); // use cors module to enable cross-origin resource sharing
var bodyParser = require("body-parser");

const app = express();

// middlewares
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors); // for all routes

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  const info = {
    string_value: "Stackoverflow",
    number_value: 8476,
  };
  res.json(info);
  //   // or
  //   res.send(
  //     JSON.stringify({ string_value: "Stackoverflow", number_value: 8476 })
  //   );
  //   //   status code to json response
  //   res.status(200).json(info);
});

// using middleware and next callback
app.get("/api", function (req, res, next) {
  // Both /api/foo and /api/bar will run this
  lookupMember(function (err, member) {
    if (err) return next(err);
    req.member = member;
    next();
  });
});
app.get("/api/foo", function (req, res, next) {
  // Only /api/foo will run this
  doSomethingWithMember(req.member);
});
app.get("/api/bar", function (req, res, next) {
  // Only /api/bar will run this
  doSomethingDifferentWithMember(req.member);
});

// middleware and next to handle error
app.get("/foo", function (req, res, next) {
  doSomethingAsync(function (err, data) {
    if (err) return next(err);
    renderPage(data);
  });
});
// In the case that doSomethingAsync return an error, this special
// error handler middleware will be called with the error as the
// first parameter.
app.use(function (err, req, res, next) {
  renderErrorPage(err);
});

app.listen(port, () => {
  console.log("Listening at http://0.0.0.0:" + port);
});
// ricky has bugs - install bodyParser and cors
