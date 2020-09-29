const http = require('http');
const async = require('async');

function getReq(url, callback) {
    http.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk.toString());
        res.on('end', () => callback(null, data));
    }).on('error', callback);
}

async.series({
    requestOne: (callback) => getReq(process.argv[2], callback),
    requestTwo: (callback) => getReq(process.argv[3], callback)
}, (err, results) => {
    if (err) {
        return console.log('An error happened.', err);
    }
    return  console.log(results);
});