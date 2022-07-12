const fs = require("fs");
const path = require("path");

// with encoding
fs.readFile("./tmp/hello.txt", { encoding: "utf-8" }, (err, content) => {
  // if an error occurred, output it and return
  if (err) return console.error(err);

  // no error ocurred, content is a string
  console.log(content);
});

// without encoding
// fs.readFile("binary", (err, binaryContent) => {
//   // If an error occurred, output it and return
//   if (err) return console.error(err);
//   // No error occurred, content is a Buffer, output it in
//   // hexadecimal representation.
//   console.log(content.toString("hex"));
// });

// read relative path
fs.readFile(
  path.resolve(__dirname, "./tmp/hello.txt"),
  (err, binaryContent) => {
    // rest of func
  }
);

// listing directory contents
// Read the contents of the directory /usr/local/bin asynchronously.
// The callback will be invoked once the operation has either completed
// or failed.
fs.readdir("/usr/local/bin", (err, files) => {
    // on error, show it and return
  if (err) return console.error(err);
  // files is an array containing the names of all entries
  // in the directory, excluding '.' (the directory itself)
  // and '..' (the parent directory).

  // display directory entries
  console.log(files.join(", "));
});

// asynchronous variant
let files
try {
    files = fs.readdirSync('/var/tmp')
} catch (error) {
    console.error(error);
}