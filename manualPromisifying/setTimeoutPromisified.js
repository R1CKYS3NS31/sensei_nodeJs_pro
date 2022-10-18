const { resolve } = require("path")

const wait = (ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}