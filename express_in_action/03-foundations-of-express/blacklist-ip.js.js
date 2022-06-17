// blacklisting an IP
const EVIL_IP = "123.45.67.89";

app.use((req, res, next) => {
	if (req.ip === EVIL_IP) {
		res.status(401).send('Not allowed!');	
	} else {
		next()
	}
})
