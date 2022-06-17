# Security

`npm i jshint -g` : installing JSHint (globally)

`jshint __myfile__.js`

### Halting after errors in callback functions


### Parsing of query string

A query string of the form `/search?q=crockford+backflip+video` might get handled the following way, by replacing the `+` with a space `" "`. 

However, this assumes that the query string `q` exists.

```js
//...
app.get('/search', function (req, res) {
	let search = req.query.q.replace(/\+/g, " ")
	// do something with the search
})
```

To improve on this, we can set a `default value` if `req.query.q` is not defined

```js
//...
	let search = req.query.q || ""
	let terms = search.split("+")
	// do something with the terms
```

Unfortunately, if a user passes in multiple values to the `q` variable, we get an array of values.

We can use yet another fucking package, called `arraywrap`. It takes one argument and wraps the content in an array, otherwise it returns if the argument is an array, already.


```js
	let search = arrayWrap(req.query.q || "")
	let terms = search[0].split('+')
```


## Protecting users

### HTTPS

`npm install express-enforces-ssl`

```js
const enforceSSL = require('express-enforces-ssl')
app.enable('trust proxy')
app.use(enforceSSL())
```

### CSRF

`npm install csurf`

```js
const csrf = require('csurf')

app.use(csrf())

app.get('/', function(req, res) {
	res.render('someview', {
		csrfToken: req.csrfToken()
	})
})
```

#### The CSRF Token in a Form

In the html file (or view):

```html
<form method="post" action="/submit">
	<input type="hidden" name="_csrf" value="<%= csrfToken %>">
	<!-- the rest of the form  -->
</form>
```


#### Handling CSRF errors

```js
app.use(function(err, req, res, next) {
	if (err.code !== "EBADCSRFTOKEN") {
		next(err)
		return
	}
	res.status(403)
	res.send("CSRF error.")
})
```


### Various Tricks

#### Disable `X-Powered-By`

`app.disable("x-powered-by")` : to hide that the site is powered by Express

TODO: Finish the rest of the chapter.