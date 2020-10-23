const express = require('express');
const app = express();
const stylus = require('stylus');

app.get('/some.css',(req, res) => {
  const css = stylus(`
    body
      color:black
  `).render();
  res.send(css);
});

app.listen('3000', () => console.log('Server listening on port 3000'));