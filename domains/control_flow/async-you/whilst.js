const http = require('http');
const async = require('async');

let body = '';
let counter = 0;

function getReq(done) {
    http.get(process.argv[2], (res) => {
        res.on('data', (data) => body += data.toString());
        res.on('end', () => done(null, counter += 1));
    }).on('error', done);
}

async.whilst(
    (callback) => callback(null, !body.includes('meerkat')),
    getReq,
    (err, calls) => {
        if (err) {
            console.error(err);
        } else {
            console.log(calls);
        }
    }
);