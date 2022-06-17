// grabbing parameters to routes
app.get('/users/:userid', function (req, res) { // matches /users/123, /users/horse_ebooks, etc...
	let userId = parseInt(req.params.userid, 10) // converts to integer
})

// using regular expressions to match routes
app.get(/^\/users\/(\d+)$/, function (req, res) {
	let userId = parseInt(req.params[0], 10)  // access parameters by their ordinality
})

// more complex route
app.get(/^\/users\/(\d+)-(\d+)$/, function (req, res) {
	let startId = parseInt(req.params[0], 10)
	let endId = parseInt(req.params[1], 10)
	// ...
})

// grabbing `query` arguments
app.get('/search', function (req, res) {
	// req.query.q == 'javascript-themed burrito'
	// ...
})