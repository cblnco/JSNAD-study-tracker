const { fork } = require('child_process');
const http = require('http');


const server = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/compute' && method === 'GET') {
        const forkedProcess = fork('compute.js');
        forkedProcess.send('Start');
        forkedProcess.on('message', (result) => res.end(`The total sum is ${result}`));
    } else {
        return res.end('Ok');
    }
});

server.listen(3000, () => console.log('Server listening on port 3000'));