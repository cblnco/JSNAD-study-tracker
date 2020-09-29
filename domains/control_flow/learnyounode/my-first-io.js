const fs = require('fs');
const filePath = process.argv[2];

const content = fs.readFileSync(filePath, 'utf8');

console.log(content.split('\n').length - 1);