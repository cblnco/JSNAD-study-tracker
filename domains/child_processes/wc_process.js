const { spawn } = require('child_process');

let results = '';
const child = spawn('wc');

process.stdin.pipe(child.stdin);

child.stdout.on('data', (chunk) => {
    results += chunk;
});

child.stdout.on('end', () => console.log("Results: ", results));