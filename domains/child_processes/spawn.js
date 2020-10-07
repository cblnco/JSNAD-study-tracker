const { spawn } = require('child_process');

const child = spawn('pwd');

child.stdout.pipe(process.stdout);

child.on('exit', (code, signal) => {
    console.log(`The process exited with code ${code} and ${signal} signal`);
});

