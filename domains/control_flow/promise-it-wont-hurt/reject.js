const promise = new Promise((resolve, reject) => {
   setTimeout(() => reject(new Error('REJECTED!')), 300);
});

function onReject(err) {
    console.log(err.message);
}

promise.then(null, onReject);