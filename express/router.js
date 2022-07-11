const express = require("express");
const app = express();

// routes
app.get("home", (req, res, next) => {
  // get codea
});
app.post("home", (req, res, next) => {
  // post codes
});
app.put("home", (req, res, next) => {
  // put codes
});
app.delete("home", (req, res, next) => {
  // delete codes
});

// define the same behavier for a route and all HTTP methods
app.all("/myPath", (req, res, next) => {});
// or
app.use("/myPath", (req, res, next) => {});
// or
app.use("*", (req, res, next) => {});
// * wildcard will route for all paths

// chain route definations for a single path
app
  .route("/home")
  .get((req, res, next) => {})
  .post((req, res, next) => {})
  .put((req, res, next) => {});
