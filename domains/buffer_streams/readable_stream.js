// Readable stream example to push data on demand to process.stdout.
const { Readable } = require('stream');

const readableStream = new Readable({
   read(size) {
       this.push(String.fromCharCode(this.currentChar));
       this.currentChar += 1;
       // Greater than Z.
       if (this.currentChar > 90) {
           this.push(null);
       }
   }
});

readableStream.currentChar = 65; // A

readableStream.pipe(process.stdout);