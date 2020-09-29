const http = require('http');

function getParsedDate(date) {
    const parsedDate = new Date(date);
    return JSON.stringify({
        hour: parsedDate.getHours(),
        minute: parsedDate.getMinutes(),
        second: parsedDate.getSeconds()
    });
}

function getUnixtime(date) {
    const unixtime = new Date(date).valueOf();
    return JSON.stringify({ unixtime });
}

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
       const dateFormat = url.split('?iso=')[1];
       res.writeHead(200, { 'Content-Type': 'application/json' });

       if (url.includes('/api/parsetime')) {
           res.end(getParsedDate(dateFormat));
       }

       if (url.includes('/api/unixtime')) {
           res.end(getUnixtime(dateFormat));
       }
   }

});

server.listen(process.argv[2]);