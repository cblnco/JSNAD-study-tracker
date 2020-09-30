const http = require('http');
const async = require('async');

function getRequest(url, done) {
    http.get(url, (res) => {
       res.on('end')
    });
}

async.each(process.argv.slice(2), getRequest, (err) => {
   if (err) {
       console.error(err);
   }
});