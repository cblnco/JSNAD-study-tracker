const { pipeline } = require('stream');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        pipeline(
            fs.createReadStream(process.argv[3], 'utf8'),
            res,
            (err) => {
                if (err) {
                    console.log('An error happened.', err);
                }
            }
        );
    }
});

server.listen(process.argv[2]);