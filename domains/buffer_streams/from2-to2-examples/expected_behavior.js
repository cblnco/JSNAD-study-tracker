const from2 = require('from2');

const readStream = from2((size, callback) => {
    setTimeout(() => {
        readStream.push('Data 0');
        setTimeout(() => {
            readStream.push('Data 1');
            callback();
        }, 50)
    }, 100);
})

readStream.on('data', (data) => {
   console.log(`Read data: ${data}`);
});