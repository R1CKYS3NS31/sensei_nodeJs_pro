const exec = require('child_process').exec

exec('cat *.js file | wc -1',(err,stdout,stderr)=>{
    if (err) {
        console.error(`exec error: ${err}`);
        return;;
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})

// child_process.exec(command[, options][, callback])

// ricky has bags