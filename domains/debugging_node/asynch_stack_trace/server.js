const express = require('express');
const routes = require('./routes');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('longjohn');
}

app.use(routes);
app.listen(3000, () => console.log('Listening on port 3000.'));

