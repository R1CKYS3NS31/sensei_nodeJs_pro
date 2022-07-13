const fs = require('fs')
const path = '/tmp'

// asynchronously
// check execution permission
fs.access(path,fs.constants.X_OK, (err)=>{
    if(err){
        console.log("%s doesn't exist",path);
    }else{
        console.log("can execute %s",path);
    }
})
// Check if we have read/write permissions
// When specifying multiple permission modes
// each mode is separated by a pipe : `|`
fs.access(path,fs.constants.R_OK|fs.constants.W_OK,(err)=>{
    if (err) {
        console.log("%s doesn't exist",path);   
    } else {
        console.log('can read/write %s',path);
    }
})