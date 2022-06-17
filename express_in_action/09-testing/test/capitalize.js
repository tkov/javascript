let capitalize = require('../capitalize')

let chai = require('chai')
let expect = chai.expect;

describe('capitalize', function() {
	it('capitalizes single words', function () {
		expect(capitalize('express')).to.equal('Express')
		expect(capitalize('cats')).to.equal('Cats')
	})
	/* another test */
	it('makes the rest of the string lowercase', function() {
		expect(capitalize('javaScript')).to.equal('Javascript')
	})
	/* yet another test */
	it('leaves empty strings along', function() {
		expect(capitalize('')).to.equal('');
	})
	/* and even more! */
	it('leaves strings with no words alone', function() {
		expect(capitalize('  ')).to.equal('  ')
		expect(capitalize('123')).to.equal('123')
	})

	it('capitalizes multiple-word strings', function() {
		expect(capitalize('what is Express?')).to.equal('What is express?')
		expect(capitalize('i love lamp')).to.equal('I love lamp')
	})

	it('leaves already-capitalizaed words alone', function() {
		expect(capitalize('Express')).to.equal('Express')
		expect(capitalize('Evan')).to.equal('Evan')
		expect(capitalize('Catman')).to.equal('Catman')
	})

	// testing with the String object
	it('capitalizes String objects without changing their values', function () {
		let str = new String('who is JavaScript?')
		expect(capitalize(str)).to.equal('Who is javascript?')
		expect(str.valueOf()).to.equal('who is JavaScript?')
	})

	// testing for ERRORS
	it('throws an error if passed a number', function() {
		expect(function() { capitalize(123) }).to.throw(Error)
	})

	// negating tests
	it('changes the value', function() {
		expect(capitalize('foo')).not.to.equal('foo')
	})

})

/** using the beforeEach() feature **/

// describe("User", function() {
// 	let user;
// 	beforeEach(function() {
// 		user = new User({
// 			firstname: "Douglas",
// 			lastName: "Reynholm",
// 			birthday: new Date(1975, 3, 20)
// 		})
// 	})

// 	it('can extract its name', function() {
// 		expect(user.getName()).to.equal('Douglas Reynholm')
// 	})

// 	it('can get its age in milliseconds', function() {
// 		let now = new Date();
// 		expect(user.getAge()).to.equal(now - user.birthday)
// 	})
// })

