const fs = require("fs");
const { resolve } = require("path");

const existsAscync = (path) => {
  return new Promise((resolve, reject) => {
    fs.exists(path, (exists) => {
      // exists is a boolean
      if (exists) {
        // resolve successfully
        resolve();
      } else {
        // reject with error
        reject(new Error("path does not exist"));
      }
    });
  });
};

// use as a promise now
existsAscync("/path/to/some/file")
  .then(() => {
    console.log("file exists!");
  })
  .catch((err) => {
    // file does not exist
    console.error(err);
  });
