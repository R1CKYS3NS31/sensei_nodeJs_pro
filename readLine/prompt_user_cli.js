const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
f
rl.question("what is your name? ", (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});
