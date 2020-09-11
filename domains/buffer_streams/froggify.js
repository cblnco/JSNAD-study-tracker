/* *
 * Simple program that uses streams to read string inputs, 
 * and replace commas with 'brip', hyphens with 'reee', 
 * full stops with 'broag', and blank spaces with 'ribbit'.
 * */

const { Transform, pipeline } = require('stream');

function froggify(matches) {
  if (matches === ',') {
    return 'brip';
  }
  else if (matches === '-') {
    return 'reee'
  }
  else if (matches === '.') {
    return 'broag';
  }
  else if (matches.match(/^ *$/)) {
    return 'ribbit';
  }
  
  return matches;
};

const transformInput = new Transform({
  transform: function(chunk, encoding, callback) {
    const inputString = chunk.toString();
    callback(null, inputString.replace(/\s|,|./g, froggify));
  }
});

console.log('The program has started.\nPress Ctrl+c to finish.\n');

pipeline(process.stdin, transformInput, process.stdout, (err) => {
  if (err) {
    console.log('An error happened');
    throw err;
  }
});