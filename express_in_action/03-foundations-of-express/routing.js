const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.end('Welcome to the Homepage');
})


http.createServer(app).listen(3000, () => {
	console.log('Running on port 3000...');
});