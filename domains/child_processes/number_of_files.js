const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

let totalFiles = '';

wc.stdout.on('data', (chunk) => totalFiles += chunk);
wc.stdout.on('end', () => console.log(`Total number of files in the current directory: ${totalFiles}.`));