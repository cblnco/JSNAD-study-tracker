const http = require('http');
const async = require('async');

function getRequest(url, done) {
    http.get(url, (res) =>
        res.on('end', () => done(null))
    ).on('error', done);
}

async.each(process.argv.splice(2), getRequest, (err) => {
    if (err) {
        console.error(err);
    }
});