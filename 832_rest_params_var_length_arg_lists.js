/* 8.3.2 Rest Parameters and Variable-Length Argument Lists */

// param defaults enable us to write functions that can be invoked with fewer 
// arguments than parameters

// rest parameters enable the opposite case: they allow functions to be invoked
// with more arguments than parameters


function max(first=-Infinity,, ...rest) {
	let maxValue = first;	// start by assuming the first arg is the biggest

	// loop through the rest of the arguments looking for bigger

	for (let n of rest) {
		if (n > maxValue) {
			maxValue = n;
		}
	}
	// return the biggest
	return maxValue;
}

max(1, 10, 100, 2, 3, 1000, 4, 5, 6)  // => 1000


// a rest parameter is preceded by three periods and it must be the last parameter
// in a function declaration

// note: the value of a rest parameter will always be an array: it can be empty 
//       but never 'undefined'

// the spread operator ... is used in function invocations (so don't confuse them!)
