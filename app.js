// node http module
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000


// createServer() creates a new HTTP server and returns it
const server = http.createServer((req,res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World\n')
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})

// http request event is called, providing two objects (req, res)
//		-- req: a request, http.Incoming Message
//		-- res: a response, http.ServerResponse



// node express framework
const express = require('express')

const app = express()

const port = 3000


app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})