const fs = require('fs');
const path = require('path');

function filteredFiles(directory, ext, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            callback(err);
        } else {
            const filteredList = [];
            files.forEach((file) => {
               if (path.extname(file) === '.' + ext) {
                   filteredList.push(file);
               }
            });
            callback(null, filteredList);
        }
    });
}

module.exports = filteredFiles;