const path = require('path')
const express = require('express')
const zipdb = require('zippity-do-dah')

// api_key: '459b73b3828b1b87c91cdb3496bad5b4' // OpenWeatherMap

const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	res.render('index')
})

app.get(/^\/(\d{5})$/, function (req, res, next) {
	let postalcode = req.params[0]
	let location = zipdb.zipcode(zipcode)

	if (!location.zipcode) {
		next()
		return
	}

	let latitude = location.latitude
	let longitude = location.longitude

})

app.use(function (req, res) {
	res.status(404).render('404')
})

app.listen(3000, () => {
	console.log('App started on port 3000...')
})