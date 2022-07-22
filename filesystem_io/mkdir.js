var fs = require("fs");

// asynchronous
// const mkdir = (dirPath, callback) => {
//   fs.mkdir(dirPath, (err) => {
//     callback(err && err.code !== "EEXIST" ? err : null);
//   });
// };

// mkdir("./existingDir", (err) => {
//   if (err) return console.error(err.code);
//   // Do something with './existingDir' here
// });

// synchronous
const mkdirSync = (dirPath) => {
  try {
    fs.mkdirSync(dirPath);
  } catch (error) {
    if (error.code == "EEXIST") {
      console.error("Forlder Exists");
    } else {
      throw error;
    }
  }
};

mkdirSync("./existing-dir");
