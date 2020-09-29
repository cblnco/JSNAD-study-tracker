function async(arg, callback) {
    console.log(`Simulating async operation with the argument ${arg}, it will be finished in 500ms`);
    setTimeout(() => {
        callback(arg * 2);
    }, 500);
}

const numbers = [3, 9, 1, 7, 4];
const results = [];
const limit = 2;
let running = 0;

function launcher() {
    while (running <= limit && numbers.length > 0) {
        running += 1;
        const value = numbers.shift();
        async(value, (result) => {
            results.push(result);
            running -= 1;
            if (numbers.length > 0) {
                launcher();
            }
            else if (running === 0) {
                console.log('The process has finished with the following results', results);
            }
        });
    }
}

launcher();