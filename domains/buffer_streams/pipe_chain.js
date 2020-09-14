// Example to demo pipe chains.
const fs = require('fs');
const { Transform } = require('stream');

const allCaps = new Transform({
  transform: function(chunk, econding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

const removeSpace = new Transform({
  transform: function(chunk, encoding, callback) {
    callback(null, chunk.toString().replace(/\s/g, ''));
  }
});

const readFile = fs.createReadStream('./txt/lorem.txt');

readFile
  .pipe(allCaps)
  .pipe(removeSpace)
  .pipe(process.stdout);