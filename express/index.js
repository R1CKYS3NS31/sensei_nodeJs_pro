const express = require('express')

const app = express()

const port = 8000

app.get('/',(request,response)=>{
    response.send('Hello, Ricky!')
})

app.listen(port,()=>{
    console.log('Server listening on http://0.0.0.0:'+port);
})