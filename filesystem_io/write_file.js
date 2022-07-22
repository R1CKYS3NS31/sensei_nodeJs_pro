var fs = require("fs");
// Save the string "Hello world!" in a file called "hello.txt" in
// the directory "/tmp" using the default encoding (utf8).
// This operation will be completed in background and the callback
// will be called when it is either done or failed.

// fs.writeFile("/tmp/hello_world.txt", "Hello world!", function (err) {
//   // If an error occurred, show it and return
//   if (err) return console.error(err);
//   // Successfully wrote to the file!
// });
// // Save binary data to a file called "binary.txt" in the current
// // directory. Again, the operation will be completed in background.

// // var buffer = Buffer.alloc([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
// fs.writeFile(
//   "/tmp/binary.txt",
//   //  buffer,
//   function (err) {
//     // If an error occurred, show it and return
//     if (err) return console.error(err);
//     // Successfully wrote binary contents to the file!
//   }
// );

// ricky has bugs

// synchronous
try {
  fs.writeFileSync("./tmp/sync.txt", "ricky", { mode: 0o755 }); // file mode set to 0755
} catch (error) {
  console.error(error);
}
