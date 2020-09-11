// Exercise to transform upcoming input strings to upper case.

const { Transform, pipeline } = require('stream');

const transform = new Transform({
  transform: function(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

pipeline(process.stdin, transform, process.stdout, (err) => {
  if (err) {
    console.log('An error happened on the pipeline.');
  }
  else {
    console.log('Pipeline ended.');
  }
});