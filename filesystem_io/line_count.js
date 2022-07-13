const readline = require("readline");
const fs = require("fs");

const file = "tmp/node.txt";

var linesCount = 0;
const rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  linesCount++; // on each linebreak, and +1 to linesCount
});
rl.on("close", () => {
  console.log(linesCount); // print the result when the 'close'
});
