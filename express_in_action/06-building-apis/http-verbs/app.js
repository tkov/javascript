// handling different HTTP verbs
const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('You sent a GET request.')
})

app.post('/', (req, res) => {
	res.send('A POST request, nice!')
})

app.put('/', (req, res) => {
	res.send('What is this? A PUT request??')
})

app.delete('/', (req, res) => {
	res.send('DELETE! Are you sure? I hope so...')
})

app.listen(3000, () => {
	console.log('App is listening on port 3000...')
})