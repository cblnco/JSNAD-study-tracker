const { Writable } = require('stream');

const ws = new Writable({
    write(chunk, _, callback) {
        console.log(`writing: ${chunk.toString()}`);
        callback();
    }
});

process.stdin.pipe(ws);