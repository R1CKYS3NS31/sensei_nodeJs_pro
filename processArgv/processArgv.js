// process.argv is an array containing the command line arguments. The first element will be node , the second
// element will be the name of the JavaScript file. The next elements will be any additional command line arguments.
var sum = 0
for (i = 0; i < process.argv.length; i++) {
    // sum += Number(process.argv[i])
    sum+=parseInt(process.argv[i])
    
}
console.log(sum); 