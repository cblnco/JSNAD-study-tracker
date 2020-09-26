const zlib = require('zlib');
const split = require('split2');
const through = require('through2');
const combine = require('stream-combiner');

let line;

function group(chunk, enc, cb) {
    if (!!chunk) {
        const { type, name } = JSON.parse(chunk);

        if (type === 'genre') {
            if (line) {
                this.push(JSON.stringify(line) + '\n');
            }
            line = { name, books: [] };
        }
        else {
            // type: book
            line.books.push(name);
        }
    }
    cb();
}

function end(cb) {
    this.push(JSON.stringify(line) + '\n');
    cb();
}

const tr = through(group, end);

module.exports = function () {
    return combine(
        split(),
        tr,
        zlib.createGzip()
    );
}