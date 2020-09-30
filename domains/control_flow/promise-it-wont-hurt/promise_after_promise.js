
function onFulfilled(value) {
    console.log(value);
}

first().then((secret) => second(secret)).then(onFulfilled);



