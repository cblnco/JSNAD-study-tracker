const { PassThrough, pipeline } = require('stream');
const fs = require('fs');

const input = fs.createReadStream('file.txt');
const output = fs.createWriteStream('out.txt');

const passThrough = new PassThrough();

console.log('Starting pipeline');

pipeline(input, passThrough, output, (err) => {
  if (err) {
    console.log('The pipeline has encountered an error.', err);
  }
  else {
    console.log('Pipeline ended sucessfully');
  }
});

// passThrough.emit('error', new Error('Hey hey hey, we meet again!'));