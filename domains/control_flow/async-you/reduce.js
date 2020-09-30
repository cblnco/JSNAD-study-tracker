const http = require('http');
const async = require('async');
const array = ['one', 'two', 'three'];


function getReq(value, done) {
    http.get(process.argv[2] + '?number=' + value, (res) => {
        let number = '';
        res.on('data', (data) => {
           number += data.toString();
        });
        res.on('end', () => {
            done(null, Number(number));
        });
    }).on('error', done);
}

async.map(array, getReq, (err, results) => {
   if (err) {
       console.error(err);
   } else {
       console.log(results.reduce((result, value) => result + value));
   }
});