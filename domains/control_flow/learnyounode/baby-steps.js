const numbers = process.argv.slice(2);
const sum = numbers.reduce((accumulator, value) => Number(accumulator) + Number(value));
console.log(sum);