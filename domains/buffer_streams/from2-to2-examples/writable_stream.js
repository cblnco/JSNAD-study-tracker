const from2 = require('from2');
const to2 = require('to2');

const readableStream = from2(() => {
    readableStream.push(Buffer.from('Hello there!'));
    readableStream.push(null);
})

const writableStream = to2((chunk, encoding, callback) => {
    console.log('Written data: ', chunk.toString());
    callback();
});

readableStream.pipe(writableStream);