const http = require("http");

http
  .createServer((request, respose) => {
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    respose.writeHead(200, {
      "Content-Type": "test/plain",
    });
    // 2. Write the announced text to the body of the page
    respose.write("Hello Sensei!\n");
    // 3. Tell the server that all of the response headers and body have been sent
    respose.end();
  })
  .listen(1337); // 4. tells the server what port to be on
