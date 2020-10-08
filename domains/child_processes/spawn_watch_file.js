const fs = require('fs');
const { spawn } = require('child_process');
const fileName = 'sample.txt';

console.log(`Watching changes on ${fileName}`);

fs.watch(fileName, () => {
    const child = spawn('ls', ['-lh', fileName]);
    child.stdout.pipe(process.stdout);
});

