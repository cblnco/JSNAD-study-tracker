const { fork } = require('child_process');

const forkedProcess = fork('child_process.js');

forkedProcess.on('message', ({ counter }) => console.log(`Message from child_process.js: ${counter}`));

forkedProcess.send({ message: 'Parent test message.'});