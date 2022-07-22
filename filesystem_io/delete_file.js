var fs = require("fs");

// asynchronous
fs.unlink("./tmp/node_copy.txt", function (err) {
  if (err) throw err;
  console.log("file deleted");
});

// synnchronous
fs.unlinkSync('./tmp/node_copy.txt')
console.log('file deleted');