const buffer = Buffer.from('Hey there mate', 'utf-8');

console.log('Buffer.from() bytes example:', Buffer.from([23, 34, 23, 45, '90']));

let string = '';
for (const value of buffer) {
    string += String.fromCharCode(value);
}
console.log(`Value using buffer in a for...of sentence: ${string}`);

string = '';
for (const value of buffer.values()) {
    string += String.fromCharCode(value);
}
console.log(`Value of buffer calling buffer.values() in a for...of sentence ${string}`);

let array = [];
for (const key of buffer.keys()) {
    array.push(key);
}
console.log(`buffer.keys() array: [${array.join(',')}]`);

array = [];
for (const value of buffer.entries()) {
    array.push(value);
}
console.log('buffer.entries():', JSON.stringify(array.map(([key, value]) => [key, String.fromCharCode(value)])));