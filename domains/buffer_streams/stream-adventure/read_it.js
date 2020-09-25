const { Readable } = require('stream');

const readStream = new Readable({
    read(_) {
        this.push(process.argv[2]);
        this.push(null);
    }
});

readStream.pipe(process.stdout);


