/* 8.3.4 The Spread Operator */

// the spread operator is used to unpack elements of an array (or any other
// iterable object, such as strings)

let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers)		// => -1

// note: ... is not a true operator (it cannot be evaluated to produce a value)

// rest parameters and the spread operator are often useful together


// this function takes a function and returns a wrapped version

function timed(f) {
	return function(...args) {
		console.log(`Enter function ${f.name}`);
		let startTime = Date.now();
		
		try {
			// Pass all arguments to the wrapped function
			return f(...args);	// spread the arguments back out again

		}
		finally {
			// before we return the wrapped return value, print elapsed time
			console.log(`Exiting function ${f.name} after ${Date.now() - startTime}ms`);
		}
	};
}

// compute the sum of the numbers between 1 an n by brute force
function benchmark(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++ ) sum += i;
	return sum;
}

timed(benchmark)(1000000)	// => 500000500000 : the sum of the numbers


