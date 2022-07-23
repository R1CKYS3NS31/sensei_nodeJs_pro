const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
input: fs.createReadStream('./tmp/node.txt')
});
// Each new line emits an event - every time the stream receives \r, \n, or \r\n
rl.on('line', (line) => {
console.log(line);
});
rl.on('close', () => {
console.log('Done reading file');
});