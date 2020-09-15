// Simple example to show the implementation of a Writable stream.
const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunk, encoding, callback) {
      console.log('Received the following chunk:', chunk.toString());
      callback(null, chunk.toString());
    }
});

process.stdin.pipe(writableStream);