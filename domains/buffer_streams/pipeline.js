// Exercise to handle error with the pipeline method.

const { PassThrough, pipeline } = require('stream');
const fs = require('fs');

const input = fs.createReadStream('./txt/file.txt');
const output = fs.createWriteStream('./txt/out.txt');

const passThrough = new PassThrough();

console.log('Starting pipeline');

pipeline(input, passThrough, output, (err) => {
  if (err) {
    console.log('The pipeline has encountered an error.', err);
  }
  else {
    console.log('Pipeline ended successfully');
  }
});

// passThrough.emit('error', new Error('Hey hey hey, we meet again!'));