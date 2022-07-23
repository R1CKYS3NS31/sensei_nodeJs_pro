// hello/main.js
// We can include the other files we've defined by using the `require()` method
var hw = require("./hello_world.js"),
  hm = require("./hello_mars.js"),
  hv = require("./hello_venus.js"),
  hj = require("./hello_jupiter.js"),
  hu = require("./index.js");
// Because we assigned our function to the entire `module.exports` object, we
// can use it directly
hw("World!"); // outputs "Hello World!"
// In this case, we assigned our function to the `hello` property of exports, so we must
// use that here too
hm.hello("Solar System!"); // outputs "Mars says Hello Solar System!"
// The result of assigning module.exports at once is the same as in hello-world.js
hv.hello("Milky Way!"); // outputs "Venus says Hello Milky Way!"
hj.hello("Universe!"); // outputs "Jupiter says hello Universe!"
hj.bye("Universe!"); // outputs "Jupiter says goodbye Universe!"
hu(); //output 'hej'
