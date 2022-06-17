/* 9.1 Classes and Prototypes */


function range(from, to) {

	// use Object.create() to create an object that inherits from the prototype object
	let r = Object.create(range.methods);
	
	// non-inherited properties, unique to this object
	r.from = from;			// start point
	r.to = to;				// end point

	return r;
}

range.methods = {
	includes(x) { return this.from <= x && x <= this.to;},
	
	// generator function (*) : allows the use of for/of and the ... spread operator
	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++) {
			yield x;
		}
	},

	toString() { return "(" + this.from + "..." + this.to + ")";}

}
