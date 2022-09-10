const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter
  .on("message", () => {
    // listen for message event
    console.log("a message was emitted!");
  })
  .on("message", () => {
    console.log("this is not the right message");
  }).on('data',()=>{
    console.log('a data just occured!');
  })

console.log(emitter.eventNames());
emitter.removeAllListeners('data')
console.log(emitter.eventNames());