var fs = require("fs");

var content;
// First I want to read the file
fs.readFile('data/data.json', 'utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    readFile();          // Or put the next step in a function and invoke it
});

var readFile = function () {
  // console.log(content);
    return JSON.stringify(content);
}

file = {
  readFile: readFile
}

module.exports = file;
