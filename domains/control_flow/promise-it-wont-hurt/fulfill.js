const promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve('FULFILLED!'), 300);
});

promise.then(console.log);