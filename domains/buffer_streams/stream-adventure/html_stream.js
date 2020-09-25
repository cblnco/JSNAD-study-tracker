const through = require('through2');
const trumpet = require('trumpet');
const tr = trumpet();

function toUpperCase(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
}

const transform = through(toUpperCase);
const selectorStream = tr.select('.loud').createStream();
selectorStream.pipe(transform).pipe(selectorStream);

process.stdin.pipe(tr).pipe(process.stdout);