var fs = require('fs')

/*
Create readable stream to file in current directory (__dirname) named 'node.txt'
Use utf8 encoding
Read the data in 16-kilobyte chunks
*/
const readable = fs.createReadStream(__dirname+'/tmp/')