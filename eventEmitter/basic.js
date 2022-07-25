// Require events to start using them
const EventEmitter = require("events").EventEmitter;

// Dogs have eventts to publish, or emit
class Dog extends EventEmitter {}
class Food {}

let myDog = new Dog();

// when mydog is chewung, run the following function
myDog.on("chew", (item) => {
  if (item instanceof Food) {
    console.log("Good dog!");
  } else {
    console.log(`Time to buy another ${item}`);
  }
});

myDog.emit("chew", "shoe"); // will resul in console.log(`Time to buy another ${item}`)
const bacon = new Food();
myDog.emit('chew',bacon) // will result in console.log("Good dog!")
