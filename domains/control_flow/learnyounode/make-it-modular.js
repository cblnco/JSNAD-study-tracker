const filteredFiles = require('./mymodule');
const directory = process.argv[2];
const ext = process.argv[3];

filteredFiles(directory, ext, (err, files) => {
    if (err) {
        console.log('An error happened.', err);
    } else {
        files.forEach((file) => {
            console.log(file);
        });
    }
});