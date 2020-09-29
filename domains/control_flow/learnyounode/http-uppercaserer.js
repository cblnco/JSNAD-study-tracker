const { pipeline } = require('stream');
const through = require('through2');
const http = require('http');

function allCaps(chunk, enc, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const transform = through(allCaps);
        pipeline(req, transform, res, (err) => {
           if (err) {
               console.log('An error happened');
           }
        });
    }
});

server.listen(process.argv[2]);