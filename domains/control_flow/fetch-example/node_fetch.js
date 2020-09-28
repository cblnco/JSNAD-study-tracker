const fetch = require('node-fetch');
const URL = 'https://jsonplaceholder.typicode.com';
const userId = process.argv[2];

function printUserData({ username, name, email }) {
    console.log('Successfully retrieved user data.');
    console.log(`Username: ${username}\nName: ${name}\nEmail: ${email}`);
}

console.log(`Fetching user ${userId} data.`);
fetch(`${URL}/users/${userId}`)
    .then((res) => res.json())
    .then((userData) => printUserData(userData))
    .catch((err) => {
       console.log('An error happened with the fetch request.\n', err);
    });