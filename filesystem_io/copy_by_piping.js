const fs = require('fs')

// Create readable stream to file in current directory named 'node.txt'
// Use utf8 encoding
// Read the data in 16-kilobyte chunks
const readable = fs.createReadStream(__dirname+'/tmp/node.txt',{encoding:'utf-8',highWaterMark:16*1024})

// create writable stream
const writable = fs.createWriteStream(__dirname+'/tmp/nodePipe.txt')

// use pipe to copy readable to writable
readable.pipe(writable)