// ...

app.use(function (req, res) {
	res.status(404)
	res.send("File not found!")
})

// ...