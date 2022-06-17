# Middleware

Middleware is a huge chunk of Express.

Where Node has you write a single large request handler for your entire app,
Express allows you to break this handler into smaller handler functions.

Again, each smaller function can handle different actions such as:
- logging
- routing
- authentication, etc.


**Note**: When your middleware function is finished it needs to either
- response to the request with `res.end` or Express methods like `res.send` or `res.sendFile`
- call `next` to continue through the *middleware stack*

## Example app: A STATIC FILE SERVER

We will create an app that serves files from a folder.

These files will reside in the `static` folder.

>If user requests `/burrito.html`, it should serve that file up to the user

This app will have **three functions** on the *middleware stack*:
- The *logger* ---  outputs the request URL and time it was requested to the console (it always calls `next()`)
- The *static file sender* --- checks if file exists in folder, sends file over the interent if it exists, otherwise
it calls `next()` which moves to the final middleware
- The *404* handler --- if hit, this means an error occured looking for the file requested; returns a 404 message to finish the request


