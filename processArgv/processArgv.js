// process.argv is an array containing the command line arguments. The first element will be node , the second
// element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
var sum = 0
for (i = 2; i < process.argv.length; i++) { // loop begins with 2 because first two elements in
    // process.argv array always is ['path/to/node.exe', 'path/to/js/file', ...]
    // sum += Number(process.argv[i])
    sum+=parseInt(process.argv[i])
    
}
console.log(sum); 
// $ node index.js 2 5 6 7
// Output will be 20