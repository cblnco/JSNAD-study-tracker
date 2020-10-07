const { spawn } = require('child_process');

let results = '';
const child = spawn('wc');

console.log('A child process started the execution of the \'wc\' command.');
console.log('Write stuff, have fun and press Ctrl + d when you want to finish.');

process.stdin.pipe(child.stdin);

child.stdout.on('data', (chunk) => {
    results += chunk;
});

child.stdout.on('end', () => {
    console.log('Results:', results);
});