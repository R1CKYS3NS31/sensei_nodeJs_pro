const fs= require('fs')

// asynchronously
fs.stat('./tmp/hello.txt',(err)=>{
    if (!err) {
        console.log('file or directory exist');
    }else if(err==='ENOENT'){
        console.log('file or directory does not exist');
    }
})

// synchronously

try {
    fs.statSync('./tmp/hello.txt')
    console.log('file or directory exist'); 
} catch (err) {
    if (err.code==='ENOENT') {
        console.log('file or directory does not exist');
    }
}