/* 8.2.2 Method Invocation */

// a method is a JS function that is stored in a property of an object
// for function f and object o, you can define a method m using

o.m = f;

// having defined method m() of object o, invoke (call) it like this

o.m();

// if method m has arguments (let's say 2), you might invoke like this:

o.m(x,y);


let calculator = {
	operand1 : 1,
	operand2 : 1,
	add() {		// we are using method shorthand syntax for this method
		this.result = this.operand1 + this.operand2;
	}

};

calculator.add()   // a method invocation to compute 1+1
calculator.result; // => 2

o["m"](x,y);  // another way to write o.m(x,y)
//a[0](z)		  // also a method invocation (assuming a[0] is a function)


// nested functions do not inherit the 'this' value of the containing function

let o = {
	m: function() {
		let self = this;

		this === o;     // => true: "this" is the object o
		f();
	
		function f() {  // a nested function f
			this === o;	// => false: "this" is global or undefined
			self === o; // => true: self is the outer "this" value
		}
	}
};

o.m();			// invoke the method m on object o


// inside the nested function f(), the 'this' keyword is not equal to object o
// this is considered a flaw in the language
// a workaround is to assign the 'this' value to a variable self
// we then can use self instead of 'this' to refer to the containing object


// another workaround is convert nested functions into arrow functions, which
// properly inherit the 'this' value

const f = () => {
	this === o 			// => true: arrow functions inherit 'this'
};

// another workaround is invoke the bind() method of the nested function

const f = (function() {
	this === o;
	}).bind(this);

// more about bind() in 8.7.5


