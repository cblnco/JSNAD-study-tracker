function compute() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += 1;
    }
    return sum;
}

process.on('message', () => process.send(compute()));

