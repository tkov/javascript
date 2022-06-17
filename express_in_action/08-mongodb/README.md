# Persisting data with MongoDB

## Creating a *user* model

We'll be building a model for users. The properties are as follows:
- *username* : a unique name --- required
- *password* : --- required
- *time joined* : a record of when the user joined the site
- *display name* : a name displayed instead of the username --- optional
- *biography* : an optional bunch of text that is displayed on the user's profile page

```js
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true},
	password: { type: String, required: true},
	createdAt: { type: Date, default: Date.now },
	displayName: String,
	bio: String,
})
```

Adding methods to the schema:

```js
userSchema.methods.name = function () {
	return this.displayName || this.username
}
````

We need to store the passwords securely. In order to do so, we can use the `bcrypt` algorithm.
We hash the password within the schema we've just created in `user.js`.

```js
const bcrypt = require('bcrypt-nodejs')
const SALT_FACTOR = 10
```

Pre-save action to hash password

```js
const noop = function() {}

userSchema.pre('save', function(err, salt) {
	if (err) { return done(err) }
	bcrypt.hash(user.password, salt, noop, function (err, hashedPassword) {
		if (err) { return done(err) }
		user.password = hashedPassword
		done()
	})
})
```

Checking user's password

```js
userSchema.methods.checkPassword = function (guess, done) {
	bcrypt.compare(guess, this.password, function (err, isMatch) {
		done(err, isMatch)
	})
}
```

Exporting the user model (at end of file)

```js
const User = mongoose.model('User', userSchema)
module.exports = User
```