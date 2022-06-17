const express = require('express')

const ALLOWED_IPS = [
	"127.0.0.1",
	"123.45.67.89"
]

const api = express.Router()


// authorization handler function (needs next())
api.use(function (req, res, next) {
	let userAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1
	if (!userAllowed) {
		res.status(401).send(`Not Authorized!`)
	} else {
		next()
	}
})

api.get('/users', function (req, res) {

})

api.post('/user', function (req, res) {

})

api.get('/messages', function (req, res) {

})

api.post('/message', function (req, res) {

})

module.exports = api;