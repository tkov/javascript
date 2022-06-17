# Building APIs

>API: Application Programming Interface

APIs are a way for one piece of code to talk to another piece of code.

You can use methods like `app.use()` and `app.get()` to talk to other code.

APIs built with Express, take HTTP requests and return with JSON data.

## A basic JSON example

You might take an HTTP request to this URL:

`/timezone?tz=America+Los_Angeles`

The API server might respond with:

```js
{
	"time": "2015-06-09T16:20:00+01:00",
	"zone": "America/Los_Angeles"
}
```` 

## A simple Express-powered JSON API

```js
const express = require('express')

const app = express()

app.get('/random/:min/:max', function (req, res) {
	let min = parseInt(req.params.min)
	let max = parseInt(req.params.max)

	if (isNaN(min) || isNaN(max)) {
		res.status(400);
		res.json({ error: 'Bad Request.' })
		return
	}

	let result = Math.round((Math.random() * (max - min)) + min)

	res.json({ result: result })

})

app.listen(3000, () => {
	console.log('App started on port 3000...')
})
```

## HTTP Verbs

GET: gets resources
- the most common HTTP method
- GET requests are *idempotent*: that is, multiple requests should not change the GET response

POST: requests a change to the server
- Is used for **creating** records, not *update*
- POST is also used for actions

PUT: updates or makes changes

DELETE: deletes records


## HTTP Status Codes

### 100 range

- 100 (Continue)
- 101 (Switching Protocols)


### 200 range

- **200: OK** --- most common status code (everything about the req/res went through just fine)
- **201: Created** --- used when a resource is created and succeeds
- **202: Accepted** --- Async variant of 201
- **204: No Content** --- the delete version of 201

### 300 range

- **301: Moved Permanently** --- means "Don't visit this URL anymore"; accompanied with HTTP header called `Location`, that indicates where to go next
- **303: See Other** --- also a redirect but used when a resource is *created*
- **307: Temporary Redirect** --- see another URL "just for now"

### 400 range

- **401/403: Unauthorized/Forbidden Errors"** --- 401 is when a user isn't logged in/403 is when a user is logged in but doesn't have permission to go where they want to go
- **404: Not Found** --- Typical Error status

### 500 range

- **500: Internal Server Error** --- for things like exceptions, broken connections to databases, database errors, etc...

