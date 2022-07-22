var fs = require("fs");

/*
Create readable stream to file in current directory (__dirname) named 'node.txt'
Use utf8 encoding
Read the data in 16-kilobyte chunks
*/
const readable = fs.createReadStream(__dirname + "/tmp/node.txt", {
  encoding: "utf-8",
  highWaterMark: 16 * 1024,
});

// create writable stream
const writable = fs.createWriteStream(__dirname + "/tmp/node_copy.txt");

readable.on("data", (chunk) => {
  writable.write(chunk);
});
