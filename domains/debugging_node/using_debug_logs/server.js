const express = require('express');
const app = express();
const stylus = require('stylus');
const debug = require('debug')('using-logs');

app.get('/some.css',(req, res) => {
  debug('CSS requested from the server.');
  const css = stylus(`
    body
      color:black
  `).render();
  res.send(css);
});

app.listen('3000', () => {
  debug('Server successfully started.')
  console.log('Server listening on port 3000');
});