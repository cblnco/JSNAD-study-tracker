const http = require('http');
const async = require('async');
const array = ['one', 'two', 'three'];


function getReq(memo, value, done) {
    http.get(process.argv[2] + '?number=' + value, (res) => {
        let number = '';
        res.on('data', (data) => {
           number += data.toString();
        });
        res.on('end', () => {
            done(null, memo + Number(number));
        });
    }).on('error', done);
}

async.reduce(array, 0, getReq, (err, result) => {
   if (err) {
       console.error(err);
   } else {
       console.log(result);
   }
});