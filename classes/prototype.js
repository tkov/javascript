// prototype.js -- Class inheritance with functions using the object prototype

// Animal Base class
function Animal(name) {
	this.name = name;
}

Animal.prototype.walk = function (destination) {
	console.log(this.name, 'is walking to', destination);
}

var animal = new Animal('elephant');
animal.walk('melbourne');


// Bird Child class
function Bird(name) {
	Animal.call(this, name)   // using call to invoke parent 'constructor'
}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function (destination) {
	console.log(this.name, 'is flying to', destination);
}
