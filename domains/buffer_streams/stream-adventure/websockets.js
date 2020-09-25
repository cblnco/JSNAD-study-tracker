const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8099');
const duplex = WebSocket.createWebSocketStream(ws);
duplex.write('hello\n');

duplex.pipe(process.stdout);