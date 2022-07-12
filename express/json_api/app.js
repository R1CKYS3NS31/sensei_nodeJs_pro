const express = require("express");
const cors = require("cors"); // use cors module to enable cross-origin resource sharing
var bodyParser = require('body-parser');

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

app.listen(port,()=>{
    console.log('Listening at http://0.0.0.0:'+port);
})
// ricky has bugs - install bodyParser and cors