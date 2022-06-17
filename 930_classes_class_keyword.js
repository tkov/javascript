/* 9.3 Classes with the class Keyword */

class Range {
	constructor (from, to) {
		this.from = from;
		this.to = to;
	}

	includes(x) { return this.from <= x && x x <= this.to; }

	*[Symbol.iterator]() {
		for (let x = Math.ceil(this.from); x <= this.to; x++)
			yield x;
	}

	toString() { return `(${this.from}...${this.to})`; }

}

let r = new Range(1,3);
r.includes(2);
r.toString();
console.log([...r]);



// creating a subclass Span -- one that inherits from the Range class

class Span extends Range {
	constructor(start, length) {
		if (length >= 0) {
			super(start, start + length);
		}
		else {
			super(start + length, start);
		}
	}


}
