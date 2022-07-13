const readline = require('readline')
const fs = require('fs')

const file ='tmp/hello.txt'

const rl = readline.createInterface({
    input:fs.createReadStream(file),
    output:process.stdout,
    terminal:false
})

rl.on('line',(line)=>{
    console.log(line); // print the content of the line on each linebreak
})