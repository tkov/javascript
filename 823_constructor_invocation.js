/* Constructor Invocation */

// if a function or method invocation is preceded by the keyword 'new',
// then it is a constructor invocation

// you can omit a pair of empty parentheses in a constructor invocation

o = new Object();
o = new Object;

// a constructor invocation created a new, empty object that inherits from
// the object specified by the 'prototype' property of the constructor



// constructor function do not normally use the 'return' keyword
// they typically initialize the new object and then return implicitly at
// the end of their body

// if a constructor explicitly returns an object, then that object becomes
// the value of the invocation expression

// returning primative values or no value at all get ignored and the new object
// is used as the value of the invocation

