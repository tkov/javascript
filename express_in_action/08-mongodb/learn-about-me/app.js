const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// adding body-parser middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const passport = require("passport")

const session = require('express-session')
const flash = require('connect-flash')

/* requiring and using Passport setup */
const setUpPassport = require('./setuppassport')


const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/learn-about-me', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))

setUpPassport()

app.set('port', process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
	secret: "jAS*3ja83902kaASDkasdjgaklQUQN",
	resave: true,
	saveUninitialized: true
}))

app.use(flash())

// important!
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

app.listen(app.get('port'), function() {
	console.log('Server started on port ' + app.get('port'))
})