const from2 = require('from2');
const to2 = require('to2');
const duplexify = require('duplexify');

const rs = from2(() => {
   const string = 'Ayy lmao!';
   console.log(`Duplex stream read interface pushing the following String: ${string}`);
   rs.push(Buffer.from(string));
   rs.push(null);
});

const ws = to2((chunk, encoding, callback) => {
   console.log(`Duplex stream write interface received the following data: ${chunk.toString()}`);
   callback();
});

const duplex = duplexify(ws, rs);

duplex.pipe(duplex);
