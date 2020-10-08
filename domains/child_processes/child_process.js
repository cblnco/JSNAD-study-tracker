
process.on('message', ({ message }) => console.log(`Parent message: ${message}`));

let counter = 0;
setInterval(() => process.send({ counter: counter += 1 }), 1000);
setInterval(() => process.send({ counter: counter += 1 }), 1000);