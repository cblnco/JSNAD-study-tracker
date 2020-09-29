const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log('An error ocurred!', err);
    }
    console.log(data.split('\n').length - 1);
});