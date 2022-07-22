var fs = require("fs");
fs.readFile("./tmp/node.txt", "utf-8", function (err, data) {
  if (err) throw err;
  var newValue = data.replace('Ricky', "Sensei");
  fs.writeFile("./tmp/node.txt", newValue, "utf-8", function (err, data) {
    if (err) throw err;
    console.log("Done!");
  });
});
