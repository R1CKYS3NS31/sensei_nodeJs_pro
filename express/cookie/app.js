const express = require("express");
const cookieParser = require("cookie-parser"); // module for parsing cookie

const app = express();
app.use(cookieParser()); // parsing cookie for all routes

app.get("/setcookie", (req, res) => {
  // setting cookie
  res.cookie("username", "ricky", {
    maxAge: 900000,
    httpOnly: true,
  });
  return res.send("Cookie has been set");
});

app.get("/getcookie", (req, res) => {
  const username = req.cookies["username"];
  if (username) {
    return res.send(username);
  }

  return res.send("No cookie found");
});

app.listen(8000);

// ricky has bugs install cookie-parser
