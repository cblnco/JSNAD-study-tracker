const { spawn } = require('child_process');

spawn('echo $ANSWER', {
    shell: true,
    stdio: 'inherit',
    env: {
        ANSWER: 70
    }
});