
function parsePromised(json) {
    return new Promise((resolve, reject) => {
       try {
           resolve(JSON.parse(json));
       } catch (err) {
           reject(err.message);
       }
    });
}

parsePromised(process.argv[2])
    .then(null, console.log);