const express = require("express");
const app = express();

// modules
const greetMiddleware = require("./greet");

class GreetingService {
  constructor(greeting = "Hello") {
    this.greeting = greeting;
  }
  createGreeting(name) {
    return `${this.greeting},${name}!`;
  }
}

app
  .use(
    "/api/v1/service1",
    greetMiddleware({
      service: new GreetingService("Oyaa"),
    })
  )
  .use(
    "/api/v1/service2",
    greetMiddleware({
      service: new GreetingService("Yoh"),
    })
  )
  .listen(8000);
// When accessing http://<hostname>:8080/api/v1/service1/greet?name=World the output will be Hello, World and
//  accessing http://<hostname>:8080/api/v1/service2/greet?name=World the output will be Hi, World .