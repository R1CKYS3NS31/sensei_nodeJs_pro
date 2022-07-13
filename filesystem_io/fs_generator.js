const fs = require('fs')

const run=(gen)=>{
    const iter = gen((err,data)=>{
        if (err) {
            iter.throw(err)
        }
        return iter.next(data)
    })
    iter.next()
}
const dirPath = '/usr/local/bin'

// execute the gen func
run(function*(resume){
    // emit the list of files in the directory from the generator
    const contents = yield fs.readdir(dirPath,resume)
    console.log(contents);
})