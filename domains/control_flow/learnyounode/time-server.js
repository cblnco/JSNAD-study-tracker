const net = require('net');

function leadWithZero(value) {
    return (`0${value}`).slice(-2);
}

const server = net.createServer((socket) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = leadWithZero(date.getMonth() + 1);
    const day = leadWithZero(date.getDate());
    const hours = leadWithZero(date.getHours());
    const minutes = leadWithZero(date.getMinutes());
    socket.end(`${year}-${month}-${day} ${hours}:${minutes}\n`);
});

server.listen(process.argv[2]);

