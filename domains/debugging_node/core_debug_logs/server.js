const util = require('util');
const express = require('express');
const debug = util.debuglog('test-log');
const app = express();


// Run it with NODE_DEBUG=timer,http,test-log
app.get('/', (req, res) => {
    debug('Incoming request');
    res.send('hey')
});

setTimeout(() => console.log('I waited for you'), 100);

app.listen(3000, () => {
    debug('Timeout complete');
    console.log('Server listening on port 3000')
});