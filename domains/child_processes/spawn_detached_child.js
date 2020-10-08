const { spawn } = require('child_process');

// The parent process will finish any time and the child process will run on the background.
// That's why the stio option is set to 'ignore'.
const child = spawn('node', ['timer.js'], {
    detached: true,
    stdio: 'ignore'
});

child.unref();


