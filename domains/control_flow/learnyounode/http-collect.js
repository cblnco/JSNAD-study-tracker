const http = require('http');

http.get(process.argv[2], (res)=> {
    let buffer = '';
    res.setEncoding('utf8');
    res.on('data', (data) => buffer += data);
    res.on('end', () => {
        console.log(`${buffer.length}\n${buffer}`);
    });
});