const express = require('express')

const app = express()

app.get('/tim', function (req, res) {
	res.send(`Welcome to Tim's homepage!`)
})

app.use(function (req, res) {
	res.status(404).send(`Page not found!`)
})

app.listen(3000, () => {
	console.log('Server running on port 3000...')
})