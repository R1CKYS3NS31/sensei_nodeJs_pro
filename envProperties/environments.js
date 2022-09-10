process.argv.forEach((val, index, array) => {
  var arg = val.split("=");
  if (arg.length > 0) {
    if (arg[0] === "env") {
      var env = require("./env/" + arg[1] + ".properties");
      module.exports = env;
    }
  }
});

// We give arguments to the application like following
// $ node app.js env=dev
// if we are using process manager like forever than it as simple as
// $ forever start app.js env=dev
// How to use the configuration file
// $ var env= require("environment.js");