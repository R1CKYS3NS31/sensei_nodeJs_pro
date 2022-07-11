const express= require('express')

module.exports = (options={})=>{ // router factory
    const router = express.Router()

    router.get('/greet',(req,res,next)=>{
        res.end(options.greeting)
    })
    return router
}