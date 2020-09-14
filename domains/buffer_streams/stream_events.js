// Example to consume streams with events.
const fs = require('fs');
const { Transform } = require('stream');

const transformIntoLower = new Transform({
  transform: function (chunk, encoding, callback) {
    callback(null, chunk.toString().toLowerCase());
  }
})

const replaceWithUnderscore = new Transform({
  transform: function(chunk, encoding, callback) {
    callback(null, chunk.toString().replace(/\s/g,'_'));
  }
});

const readStream = fs.createReadStream('./lorem.txt');

// Use stream events instead of readStream.pipe(transformIntoLower).pipe(replaceWithUnderscore).pipe(process.stdout);
// Read stream events.
readStream.on('data', (chunk) => {
  console.log('readStream received a chunk.');
  transformIntoLower.write(chunk);
});

readStream.on('end', () => {
  console.log('Finished reading the file.');
  transformIntoLower.end();
});

// Transform into lower events.
transformIntoLower.on('data', (chunk) => {
  replaceWithUnderscore.write(chunk);
});

transformIntoLower.on('end', () => {
  console.log('transformIntoLower stream finished.');
  replaceWithUnderscore.end();
});

// Replace with underscore events.
replaceWithUnderscore.on('data', (chunk) => {
  process.stdout.write(chunk);
});

replaceWithUnderscore.on('end', () => {
  console.log('replaceWithUnderscore stream finished.');
  process.stdout.end();
});
