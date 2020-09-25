const duplexer = require('duplexer2');
const { spawn } = require('child_process');

module.exports = function(cmd, args) {
    const { stdin, stdout } = spawn(cmd, args);
    return duplexer(stdin, stdout);
}