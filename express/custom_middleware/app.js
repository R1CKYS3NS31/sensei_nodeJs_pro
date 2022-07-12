const express = require('express')
const app = express()

// each request will pass through it
app.use((req,res,next)=>{
    req.user = 'testuser'
    next() // it will pass the control to next matching route
})

app.get('/',(req,res)=>{
    const user = req.user
    console.log(user); // testuser
    return res.send(user)
})

app.listen(8000)