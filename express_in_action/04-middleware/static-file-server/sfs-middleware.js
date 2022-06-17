// static file server middleware
const fs = require('fs')

app.use((req, res, next) => {
	// ...
})

app.use((req, res, next) => {
	let filePath = path.join(__dirname, "static", req.url)
	fs.stat(filePath, function (err, fileInfo) {
		if (err) {
			next()
			return
		}

		if (fileInfo.isFile()) {
			res.sendFile(filePath)
		} else {
			next();
		}
	})
})

app.listen(3000, function() {
	// ...
})