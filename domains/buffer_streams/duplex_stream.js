// Duplex stream example, it will output letters from A to Z and echo the received inputs from command line.
const { Duplex } = require('stream');

const duplexStream = new Duplex({
    read(size) {
        this.push(String.fromCharCode(this.currentChar));
        this.currentChar += 1;

        if (this.currentChar > 90) {
            this.push(null);
        }
    },

    write(chunk, encoding, callback) {
        console.log('Received chunk:', chunk.toString());
        callback();
    }
});

duplexStream.currentChar = 65;

process.stdin.pipe(duplexStream).pipe(process.stdout);
// process.stdin.pipe(duplexStream).pipe(duplexStream).pipe(process.stdout);