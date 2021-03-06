const http = require('http');
const tr = require('through2');
const POST = 'POST';

function toUpperCase(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
}

const server = http.createServer((req, res) =>
    req.method === POST ? req.pipe(tr(toUpperCase)).pipe(res) : res.end()
);

server.listen(process.argv[2]);