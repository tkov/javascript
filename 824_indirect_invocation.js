/* 8.2.4 Indirect Invocation */

// JS functions are objects, and thus have methods
// call() and apply() invoke the function indirectly

// both methods allow you to explicitly specify the 'this' value for the invocation
// this means you can invoke any function as a method of any object even if it is not
// actually a method of that object

// both methods allow you to specify the arguments for the invocation

// call() method uses its own arg list as args to the function
// apply() methods expects an array of values to be used as arguments


// examples (from w3schools) -- www.w3schools.com/js/js_function_apply.asp

// apply()

var person = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
}

var person1 = {
	firstName: "Mary",
	lastName: "Doe"
}

person.fullName.apply(person1);	 		// will return "Mary Doe"


// call()

var person = {
	fullName: function(city, country) {
		return this.firstName + " " + this.lastName + "," + city + "," + country;
	}
}

var person1 = {
	firstName: "John",
	lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");



