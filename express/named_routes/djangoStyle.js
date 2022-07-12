const app = require('express')()
require('express-reverse')(app) // install express-reverse

// use
app.get('test-route','/home',(req,res)=>{
    res.end('home')
})
// or
// require('./middlewares/routing')(app);

// in ./middlewares/routing.js file
module.exports = (app)=>{
    app.get('test-route','/home',(req,res)=>{
        res.end('home')
    })
}