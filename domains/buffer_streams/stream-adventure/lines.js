const tr = require('through2');
const split2 = require('split2');

let counter = 1;

function modifyStrings(chunk, _, cb) {
    this.push(counter % 2 === 0
            ? chunk.toString().toUpperCase() + '\n'
            : chunk.toString().toLowerCase() + '\n');
    counter += 1;
    cb();
}

const transform = tr(modifyStrings);

process.stdin.pipe(split2()).pipe(transform).pipe(process.stdout);