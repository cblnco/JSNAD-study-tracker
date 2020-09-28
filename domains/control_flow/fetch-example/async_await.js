// Get a random post from jsonplaceholder.com and get the details of the user who made it.
const fetch = require('node-fetch');
const URL = 'https://jsonplaceholder.typicode.com';
const postId = process.argv[2];

async function getPostData() {
    console.log(`Retrieving post #${postId} data.`);
    const { userId, title, body } = await fetch(`${URL}/posts/${postId}`).then((res) => res.json());
    const { name, username, email } = await fetch(`${URL}/users/${userId}`).then((res) => res.json());
    console.log(`The post #${postId} was made by ${name} (${username}) - ${email}`);
    console.log(`Post content:\nTitle: ${title}\nBody: ${body}`);
}

getPostData().catch((err) => console.log('An error happened while retrieving post data.', err));