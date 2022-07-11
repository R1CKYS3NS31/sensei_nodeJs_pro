const http = require("http");

const port = 8000

const index = (req, res) => {
  res.writeHead(200);
  res.end("Hello,Ricky");
};

http.createServer((req,res)=>{
    if (req.url==='/') {
        return index(req,res)
    }
    res.writeHead(404)
    res.end(http.STATUS_CODES[404])
}).isten(port, function () {
    console.log("Server listening on http://localhost:" + port);
  });