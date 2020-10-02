const http = require('q-io/http');

http.read('http://localhost:7000')
    .then((id) => http.read(`http://localhost:7001/${id}`))
    .then((result) => console.log(JSON.parse(result)))
    .catch(console.error)
