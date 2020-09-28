// Basic promise example.

function timeoutPromise(ms) {
    return new Promise((resolve, reject) => {
        if (ms === undefined) {
            reject(new Error('ms is a required value'));
        } else {
            setTimeout(() => {
                resolve(`Resolved in ${ms} milliseconds!`);
            }, ms);
        }
    });
}

const ms = process.argv[2];
console.log('Launching timeoutPromise.');
timeoutPromise(ms)
    .then((msg) => console.log(`The promise has been fulfilled with the following message: ${msg}`))
    .catch((err) => console.log('The promise was rejected :( \n', err))
