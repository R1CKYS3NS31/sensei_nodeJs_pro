process.argv.forEach((val,index,array)=>{
    var arg = val.split('=')
    if (arg.length>0) {
        if(arg[0]==='env'){
            var env = require('./'+arg[1]+'.json')
            module.exports=env
        }
    }
})