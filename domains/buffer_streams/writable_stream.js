// Simple example to show the implementation of a Writable stream.
// We can do the same thing using standard streams like so: process.stdin.pipe(process.stdout);
const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunk, encoding, callback) {
      console.log('Received the following chunk:', chunk.toString());
      callback(null, chunk.toString());
    }
});

process.stdin.pipe(writableStream);