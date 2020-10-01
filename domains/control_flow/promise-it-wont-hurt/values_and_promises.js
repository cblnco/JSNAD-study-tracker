
function attachTitle(string) {
    return 'DR. ' + string;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);

