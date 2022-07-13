const fs = require("fs");

// Iterate through all items obtained via
// 'yield' statements
// A callback is passed to the generator function because it is required by
// the 'readdir' method
const run = (gen) => {
  const iter = gen((err, data) => {
    if (err) {
      iter.throw(err);
    }
    return iter.next(data);
  });
  iter.next();
};
const dirPath = "/usr/local/bin";

// execute the gen func
run(function* (resume) {
  // emit the list of files in the directory from the generator
  const contents = yield fs.readdir(dirPath, resume);
  console.log(contents);
});
