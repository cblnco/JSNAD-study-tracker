const crypto = require('crypto');
const [ , , pass, init] = process.argv;
const stream = crypto.createDecipheriv('aes256', pass, init);

process.stdin.pipe(stream).pipe(process.stdout);