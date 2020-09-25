const size = 1000;
const safeBuffer = Buffer.alloc(size);
const unsafeBuffer = Buffer.allocUnsafe(size);

console.log('Buffer.allo():', safeBuffer);
console.log('Buffer.allocUnsafe()', unsafeBuffer);

function getBufferValues(buffer) {
    let contents = '';
    for (const value of buffer) {
        contents += String.fromCharCode(value);
    }
    return contents;
}

console.log('Data from safeBuffer:', getBufferValues(safeBuffer))
console.log('Data from unsafeBuffer:', getBufferValues(unsafeBuffer));