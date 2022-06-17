/* 8.3.3 The Arguments Object */

// before rest parameters, there was the Arguments object:
//		-- within the body of any function the identifier 'arguments'
//		   refers to the Arguments object for that invocation
//		-- the Arguments object is an array-like object which allows retrieval by number (index)


function max(x) {
	let maxValue = -Infinity;

	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > maxValue) maxValue = arguments[i];
	}

	return maxValue;
}
