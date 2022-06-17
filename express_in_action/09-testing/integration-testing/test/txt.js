const app = require('../app')

const supertest = require('supertest')

// describe(__name__, __function__)
describe('plain text response', function() {

	// using beforeEach to help reduce repeated code for setup
	let request
	beforeEach(function() {
		request = supertest(app)
			.get('/')
			.set("User-Agent", "my cool browser")
			.set("Accept", "text/plain")
	})

	it('returns a plain text response', function (done) {
		// ...
		// supertest(app)
		// 	.get('/')
		// 	.set("User-Agent", "my cool browser")
		// 	.set("Accept", "text/plain")
		request
			.expect("Content-Type", /text\/plain/)
			.expect(200)
			.end(done)
	})
	it('returns your User Agent', function (done){
		// ...
		// supertest(app)
		// 	.get('/')
		// 	.set("User-Agent", "my cool browser")
		// 	.set("Accept", "text/plain")
		request
			.expect(function(res) {
				if (res.text !== "my cool browser") {
					throw new Error("Response does not contain User Agent")
				}
			})
			.end(done)
	})

})