const express = require('express')
const bodyParser = require('body-parser') // install body-parser

const app= express()

// parses the body for POST, PUT, DELETE, etc
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// routes
app.use('/post-data-here',(req,res,next)=>{
    console.log(req.body); // req.body contains the parsed body of the request
})

app.listen(8000,'0.0.0.0')