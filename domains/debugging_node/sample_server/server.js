const express = require('express');
const app = express();
const past = require('./past');
const future = require('./future');

// Run with node --inspect and view the value of req.params.future and why it sends a NaN back.
app.get('/:age', (req, res) => {
  return res.send(past(req.params.age, 10) + future(req.params.future, 10));
});

app.listen(3000, () => console.log('Listening on port 3000.'));