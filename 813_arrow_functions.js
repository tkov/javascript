/* 8.1.3 Arrow Functions */

// the 'function' keyword is NOT used

const sum = (x,y) => {return x + y};

// if the body of the funtion is a single return statement,
// you can omit the 'return' keyword


const sum = (x,y) => x + y;

// if an arrow function has exactly one parameter, you can
// omit the parentheses around the parameter list:

const polynomial = x => x * x + 2 * x + 3;

// arrow functions with no args must be written with an empty pair of
// parentheses

const constantFunc = () => 42;



// syntactical ambiguity

const f = x => { return { value: x }; };  // good: returns an object

const g = x => ({ value: x }); 			  // good: returns an object (the parentheses avoid ambiguity)
										  //       between an empty object {}, and a function body

const h = x => { value: x };			  // bad: returns nothing

// const i = x => { v: x, w: x };			  // bad: syntax error


// the consice syntax of arrow function make them ideal passing functions into other functions
// this is evident in the map(), filter() and reduce() array methods

let filtered = [1,null,2,3].filter(x => x !== null);   // filtered == [1,2,3]
let squares = [1,2,3,4].map(x => x * x);   			   // squares == [1,4,9,16]


// Note: arrow functions inherit the value of the 'this' keyword from the environment in which
//       they are defined


// arrow function do not have a 'prototype' property, thus cannot be used as constructor functions
// for new classes


