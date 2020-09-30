const promise = new Promise((resolve, reject) => {
    reject(new Error('I\'m an error :('));
});
promise.catch((err) => console.log(err.message));

const promise2 = Promise.resolve('The promise was fulfilled');
promise2.then(console.log);

const promise3 = Promise.reject(new Err('Oops!'));
promise3.catch((err) => console.log(err.message));