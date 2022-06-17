// testing HTML responses

const app = require('../app')

const supertest = require('supertest')

const cheerio = require('cheerio')

describe('html response', function() {
	
	var request
	beforeEach(function() {
		request = supertest(app)
			.get('/')
			.set("User-Agent", "a cool browser")
			.set("Accept", "text/html")
	})

	it('returns an HTML response', function(done) {
		// ...
		request
			.expect("Content-Type", /html/)
			.expect(200)
			.end(done)
	})
	it('returns your User-Agent', function(done) {
		// ...
		request
			.expect(function(res) {
				let htmlResponse = res.text
				// ...
				let $ = cheerio.load(htmlResponse)
				// console.log($(".user-agent").html())
				let userAgent = $(".user-agent").html().trim()
				if (userAgent !== "a cool browser") {
					throw new Error("User Agent not found (found: " + userAgent + ")")
				}
			})
			.end(done)
	})
})