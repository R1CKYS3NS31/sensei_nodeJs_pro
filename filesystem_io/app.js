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

fs.readdir('/usr/local/bin',(err,files)=>{

    if (err) return console.error(err);

    // display directory entries
    console.log(files.join(''));
})