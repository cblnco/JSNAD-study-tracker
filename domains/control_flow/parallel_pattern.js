
function async(arg, callback) {
    console.log(`Simulating async operation with the argument ${arg}, will be finished in 500ms`);
    setTimeout(() => callback(arg * 2), 500);
}

const numbers = [6, 2, 7, 9, 5];
const results = [];

numbers.forEach((value,index) => {
    async(value, (result) => {
       results.push(result);
       if (index === numbers.length - 1) {
           console.log('Finished parallel work with the following result:', results);
       }
    });
});