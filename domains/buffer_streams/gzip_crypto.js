// Example to gzip and encrypt any filename received from the command line interface.
const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const { Transform } = require('stream');
const fileName = process.argv[2];

const reportProgress = new Transform({
   transform(chunk, encoding, callback) {
       process.stdout.write('.');
       callback(null, chunk);
   }
});

// Crypto parameters.
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

fs.createReadStream(fileName)
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv))
    .pipe(reportProgress)
    .pipe(fs.createWriteStream(`${fileName}.zz`))
    .on('finish', () => process.stdout.write(`Finished Gzip process on ${fileName}.`));