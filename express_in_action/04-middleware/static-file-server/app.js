const express = require('express')
const path = require('path')
const fs = require('fs')

const morgan = require('morgan') // a request logger middleware

const app = express()


// morgan
app.use(morgan('tiny'))

// our logger: logging all incoming requests (instead of `morgan`)
// app.use((req, res, next) => {
// 	console.log("Request IP: " + req.url)
// 	console.log("Request date: " + new Date())
// 	next() // needs to call next() otherwise the application 'hangs'
// })

// Express' built-in static file middleware
const staticPath = path.join(__dirname, 'static')
app.use(express.static(staticPath))	// serving files from this static path

// app.use((req, res, next) => {
// 	let filePath = path.join(__dirname, "static", req.url)
// 	fs.stat(filePath, function (err, fileInfo) {
// 		if (err) {
// 			next()
// 			return
// 		}

// 		if (fileInfo.isFile()) {
// 			res.sendFile(filePath)
// 		} else {
// 			next();
// 		}
// 	})
// })


// always serving a file
// const filePath = path.normalize(path.join(__dirname, 'static/hello.html'))
// console.log(filePath)

app.use(function (req, res) {
	// res.sendFile(filePath)
	// printing whether a file is sent successfully
	res.sendFile(filePath, function (err) {
		err ? console.log('File failed to send') : console.log('File sent')
	})
})

// entering 'error' mode if a file fails to send
app.use(function (req, res, next) {
	res.sendFile(filePath, function (err) {
		// err && next(new Error('Error sending file'))
		if (err) next(new Error('Error sending file'))
	})
})

// middleware that 'logs' errors (does not respond to the errors)
app.use(function (err, req, res, next) {
	console.log(err) // logs error
	next(err) // continues to next error-handling middleware
})

// responding to the error
app.use(function(err, req, res, next) {  // having 4 args indicates it is an error-handler!
	res.status(500)
	res.send('Internal server error.')
})


// this is the last function on the *middleware stack*
// app.use(function (req, res) {
// 	res.status(404)
// 	res.send("File not found!")
// })

app.listen(3000, function () {
	console.log("App started on port 3000")
})