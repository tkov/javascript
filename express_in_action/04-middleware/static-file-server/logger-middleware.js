// the logger

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()


// logging all incoming requests (in place of `morgan`)
app.use((req, res, next) => {
	console.log("Request IP: " + req.url)
	console.log("Request data: " + new Date())
	next() // needs to call next() otherwise the application 'hangs'
})

app.listen(3000, function () {
	console.log("App started on port 3000")
})