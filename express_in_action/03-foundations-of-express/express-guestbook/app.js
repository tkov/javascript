const http = require('http')

const express = require('express')

const path = require('path')

const logger = require('morgan')

const bodyParser = require('body-parser')


const app = express()


app.set('views', path.resolve(__dirname, 'views'))

app.set('view engine', 'ejs')


let entries = []; // global array to store Guestbook entries
app.locals.entries = entries

app.use(logger('dev')) // uses morgan to log every request

app.use(bodyParser.urlencoded({ extended: false })) // Important: populates a variable `req.body` if user is submitting a form

app.get('/', (req, res) => {
	console.log(entries)
	res.render('index')
})

app.get('/new-entry', (req, res) => {
	res.render('new-entry')
})

app.post('/new-entry', (req, res) => {
	if (!req.body.title || !req.body.body) {
		res.status(400).send("Entries must have a title and a body")
		return
	}

	entries.push({
		title: req.body.title,
		content: req.body.body,
		published: new Date()
	});

	res.redirect('/')
})

app.use((req, res) => {
	res.status(404).render('404')
})

http.createServer(app).listen(3000, () => {
	console.log('Guestbook app started on port 3000...')
})

