// The cluster module allows you to easily create child processes that all share server ports.
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length; //number of CPUS
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
    //creating child process
  }
  //on exit of cluster
  cluster.on("exit", (worker, code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log("worker success!");
    }
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);
}
