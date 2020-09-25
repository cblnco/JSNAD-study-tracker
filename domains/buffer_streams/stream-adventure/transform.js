const tr = require('through2');

function write (chunk, _, callback) {
    callback(null, chunk.toString().toUpperCase());
}

const transform = tr(write);

process.stdin.pipe(transform).pipe(process.stdout);