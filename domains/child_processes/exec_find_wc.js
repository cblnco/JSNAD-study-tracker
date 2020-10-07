const { exec } = require('child_process');

// With exec we can use Shell syntax and then the output is stored in a buffer that we can handle in a callback.
// This is the main difference between spawn (streams) and exec (buffers).
// Better be used when we're expecting small results or amounts of data.
exec('find . -type f | wc -l', (err, stdout, stderr) => {
   if (err) {
       console.error('An error happened.', err);
       return;
   }

   return console.log(`Total number of files in the current directory: ${stdout}`);
});