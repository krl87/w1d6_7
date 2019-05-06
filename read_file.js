var fs = require("fs")
var args = process.argv[2];

fs.readFile(args, function (err, data){
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});