const http = require('http');
const async = require('async');

function getRequest(url, done) {
    http.get(url, (res) => {
       let body = '';
       res.on('data', (data) => body += data);
       res.on('end', () => done(null, body));
    }).on('error', done);
}

async.map(process.argv.splice(2), getRequest, (err, results) => {
    if (err) {
        console.error(err);
    } else {
        console.log(results);
    }
});