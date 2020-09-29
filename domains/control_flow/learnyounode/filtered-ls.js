const fs = require('fs');
const directory = process.argv[2];
const extension = process.argv[3];

fs.readdir(directory, (err, files) => {
    if (err) {
        console.log('An error happened.', err);
    } else {
        files.forEach((file) => {
            if (file.includes('.' + extension)) {
                console.log(file);
            }
        });
    }
});