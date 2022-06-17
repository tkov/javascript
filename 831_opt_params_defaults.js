/* 8.3.1 Optional Parameters and Defaults */

// when a function is invoked with fewer arguments than declared parameters,
// the additional parameters are set to their default value (which is usually undefined)

// it is often useful to write function so that some arguments are optional



// append the names of the enumerable properties of object o to array a, and return a
// if a is omitted, create and return a new array
function getPropertyNames(o, a){
	if (a === undefined) a = []; // if undefined, use a new array
	for (let property in o) a.push(property);
	return a;
}


// getPropertyNames() can be invoked with one or two arguments

let o = {x: 1}, p = {y:2, z: 3};   // two objects for testing
let a = getPropertyNames(o);       // a == ["x"]; get o's properties in a new array

getPropertiesNames(p, a);		   // a == ["x", "y", "z"]; add p's properties to it

// we can replace the if statement with:

a = a || [];


// in ES6, you can define a default value for each function paramter in the parameter list

function getPropertyNames(o, a = []) {
	for (let property in o) a.push(propery);
	return a;
}


// default expressions are evaluated when the function is called.
// you can use variables, or function invocations to compute default values.

// for functions with multiple parameters, you can use the value of a previous parameter
// to define the default value of the parameters that follow it

const rectangle = (width, height=width*2) => ({width, height})
rectangle(1) 	// => {width: 1, height: 2}



