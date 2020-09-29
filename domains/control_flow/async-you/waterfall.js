const fs = require('fs');
const http = require('http');

function printError(err) {
    return console.log('An error happened.', err);
}

fs.readFile(process.argv[2], 'utf8', (err, data) => {
   if (err) {
       printError(err);
   }

    http.get(data, (res) => {
        let body = '';
        res.on('data', (data) => body += data.toString());
        res.on('end', () => console.log(body));
    }).on('error', printError);
});
