const { Readable, Writable } = require('readable-stream');

let i = 20;

const readStream = new Readable({
    read: (size) => {
        setImmediate(() => {
            readStream.push(i-- ? Buffer.alloc(size) : null);
        });
    }
})

const writeStream = new Writable({
    write: (chunk, encoding, callback) => {
        console.log(writeStream._writableState.length);
        setTimeout(callback, 1);
    }
});


readStream.on('data', (chunk) => {
    const isWritable = writeStream.write(chunk);
    if (isWritable === false) {
        readStream.pause();
        writeStream.once('drain', () => readStream.resume());
    }
});