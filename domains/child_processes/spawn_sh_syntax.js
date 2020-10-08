const { spawn } = require('child_process');

spawn('find . -type f | wc -l', { stdio: 'inherit', shell: true });
