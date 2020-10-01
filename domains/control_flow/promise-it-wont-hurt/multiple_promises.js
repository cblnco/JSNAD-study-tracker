

function all(first, second) {
    let counter = 0;
    const results = [];
    return new Promise((resolve, reject) => {
        function onFulfilled(result, index) {
            results[index] = result;
            counter += 1;
            if (counter === 2) {
                resolve(results);
            }
        }
        first.then((result) => onFulfilled(result, 0));
        second.then((result) => onFulfilled(result, 1));
    });
}

all(getPromise1(), getPromise2()).then(console.log);

