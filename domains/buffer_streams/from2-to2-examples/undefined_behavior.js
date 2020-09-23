const { Readable } = require('readable-stream');

const readStream = new Readable({
   read() {
       setTimeout(() => {
           this.push('Data 0');
           setTimeout(() => {
               this.push('Data 1');
           }, 50);
       }, 100)
   }
});

readStream.on('data', (data) => {
   console.log(data.toString());
});