const tar = require('tar');
const crypto = require('crypto');
const concat = require('concat-stream');

const [ , , alg, key, iv] = process.argv;

const decipher = crypto.createDecipheriv(alg, key, iv);

const parser = new tar.Parse();
parser.on('entry', function (entry) {
    const cryptoHash = crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe(cryptoHash).pipe(concat((hash) => {
        if (entry.type !== 'Directory') {
            console.log(`${hash} ${entry.path}`);
        }
    }));
});

process.stdin.pipe(decipher).pipe(parser);