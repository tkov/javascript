const express = require('express')
const path = require('path')
const apiRouter = require('./routes/api_router')

const app = express()

const staticPath = path.resolve(__dirname, 'static')
app.use(express.static(staticPath))

// our "mini" api app being plugged into our "main" app
app.use('/api', apiRouter)

app.listen(3000, () => {
	console.log('Server running on port 3000...')
})