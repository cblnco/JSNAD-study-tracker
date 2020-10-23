const express = require('express');
const routes = require('./routes');
const app = express();
// Prettify stack traces and make them more readable.
require('cute-stack')();

// Run server with --stack-trace-limit set to 21 to retain more stacks on each tick of the event loop.

// We can also set a limitless stack trace using environment variables.
/**
 * if (process.env.NODE_ENV !== 'production') {
 *  Error.stackTraceLimit = Infinity;
 * }
 */
app.use(routes);
app.listen(3000, () => console.log('Listening on port 3000.'));

