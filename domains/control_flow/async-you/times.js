const http = require('http');
const async = require('async');
const [ , , hostname, port] = process.argv;


function createUser(id, done) {
  const req = http.request({
    hostname,
    port,
    path: '/users/create',
    method: 'POST'
  }, (res) => {
    res.resume();
    res.on('end', () => done());
  }).on('error', done);
  req.write(JSON.stringify({ 'user_id': id }));
  req.end();
}

function getUsers(done) {
  http.get(`http://${hostname}:${port}/users`, (res) => {
    let users = '';
    res.on('data', (data) => users += data.toString());
    res.on('end', () => done(null, users));
  }).on('error', done);
}

async.series({
  postUsers: (next) => async.times(5, (id, done) => createUser(id + 1, done), (err) => {
    if (err) {
      next(err);
    } else {
      next();
    }
  }),
  getUsers
}, (err, results) => {
  if (err) {
    console.error(err);
  } else  {
    console.log(results.getUsers);
  }
});