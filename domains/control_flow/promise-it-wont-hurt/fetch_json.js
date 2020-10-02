const http = require('q-io/http');

http.read('http://localhost:1337')
    .then((json) => JSON.parse(json))
    .then(console.log)