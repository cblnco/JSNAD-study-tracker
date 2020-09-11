// Exercise to verify how errors can be handled usin the pipe method.

const { PassThrough } = require('stream');

const passThrough = new PassThrough();

passThrough.on('error', (err) => {
  console.log('passThrough encountered an error', err);
});

process.stdin.on('error', (err) => {
  console.log('Stdin encountered an error', err);
});

process.stdout.on('error', err => {
  console.log('Stdout encountered an error', err);
});

process.stdin.pipe(passThrough).pipe(process.stdout);

passThrough.emit('error', new Error('Whoops!'));
process.stdout.emit('error', new Error('My bad :('));
process.stdin.emit('error', new Error('Better next time mate...'));