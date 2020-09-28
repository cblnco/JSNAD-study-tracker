
function async(arg, callback) {
    console.log(`Simulating async operation with the argument ${arg}, will be finished in 500ms`);
    setTimeout(() => callback(arg * 2), 500);
}

const numbers = [ 3, 4, 8, 2, 9];
const results = [];

function series(value) {
    if (value) {
        async(value, (result) => {
           results.push(result);
           return series(numbers.shift());
        });
    }
    else {
        console.log('Finished series with the following result:', results);
    }
}

series(numbers.shift());