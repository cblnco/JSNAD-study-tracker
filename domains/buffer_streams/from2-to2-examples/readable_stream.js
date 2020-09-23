const from2 = require('from2');

const readableStream = from2(() => {
    readableStream.push(Buffer.from('Hello World'));
    readableStream.push(null);
});

readableStream.on('data', (data) => {
    console.log(data);
    console.log(data.toString());
});