const http = require('http');
const concat = require('concat-stream');
const urls = process.argv.slice(2);
const results = [];

function sendGetReq(url) {
    http.get(url, (res) => {
       res.pipe(concat((data) => {
           results.push(data);

           if (urls.length === 0) {
               return console.log(results.join('\n'));
           }
           else {
               return sendGetReq(urls.shift());
           }
       }));
    }).on('error', (err) => console.log('An error happened.', err));
}

sendGetReq(urls.shift());
