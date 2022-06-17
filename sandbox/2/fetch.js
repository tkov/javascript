const fetch = require('node-fetch');

const f = fetch('https://jsonplaceholder.typicode.com/posts/1');
console.log(f);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data));