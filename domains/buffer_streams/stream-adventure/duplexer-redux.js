const tr = require('through2').obj;
const duplex = require('duplexer2');

const counts = {};

function occurrences({ country }, enc, cb) {
    const occurrence = counts[country] || 0;
    counts[country] = occurrence + 1;
    cb();
}

module.exports = function(counter) {
    const transform = tr(occurrences, () => counter.setCounts(counts));
    return duplex({ objectMode: true }, transform, counter);
}