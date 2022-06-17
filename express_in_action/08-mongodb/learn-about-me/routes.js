const express = require('express')

const User = require('./models/user')

// signup stuff
const passport = require('passport')

const router = express.Router()

/* passing data to views (8.28) */
router.use(function(req, res, next) {
	res.locals.currentUser = req.user
	res.locals.errors = req.flash('error')
	res.locals.infos = req.flash('info')
	res.locals.msg = "This is a message."
	next()
})

/* checking if user is authenticated */
function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		next()
	}
	else {
		req.flash('info', 'You must be logged in to see this page.')
		res.redirect('/login')
	}
}

router.get('/', function (req, res, next) {
	User.find()
		.sort({ createdAt: 'descending' })
		.exec(function (err, users) {
			if (err) return next(err)
			res.render('index', { users: users })
		})
})

/* profiles routes */
router.get('/users/:username', function (req, res, next) {
	User.findOne({ username: req.params.username }, function (err, user) {
		if (err) { return next(err) }
		if (!user) { return next(404) }
		// console.log('currentUser is: ', res.locals.currentUser.id)
		res.render('profile', { user: user })
	})
})

// signup routes
router.get('/signup', function (req, res) {
	res.render('signup')
})

router.post('/signup', function (req, res, next){
	let username = req.body.username
	let password = req.body.password

	User.findOne({ username: username }, function(err, user) {
		if (err) { return next(err) }
		if (user) {
			req.flash('error', 'User already exists')
			return res.redirect('/signup')  // if user exists, bail out
		}

		let newUser = new User({
			username: username,
			password: password
		})
		newUser.save(next)

	}) // findOne()

}, passport.authenticate('login',{
	successRedirect: '/',
	failureRedirect: '/signup',
	failureFlash: true
})

)

/* GET /login */
router.get('/login', function (req, res) {
	res.render('login')
})


/* POST /login : doing the login */
router.post('/login', passport.authenticate('login', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}))


/* GET /edit */
router.get('/edit', ensureAuthenticated, function (req, res) {
	res.render('edit')
})

/* POST /edit */
router.post('/edit', ensureAuthenticated, function (req, res, next) {
	req.user.displayName = req.body.displayname
	req.user.bio = req.body.bio
	req.user.save(function(err) {
		if (err) { 
			next(err) 
			return 
		}
		req.flash('info', 'Profile updated!')
		res.redirect('/edit')
	})
})

/* GET /logout */
router.get('/logout', function (req, res) {
	req.logout(function (err) {
		if (err) { return next(err) }
		res.redirect('/')
	}) // a function added by Passport
})

module.exports = router