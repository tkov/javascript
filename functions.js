/* JavaScript Function Definitions */

// Function Declarations

function functionName (param) {
    // code to be executed
}


function myFunction (a, b) {
    return a * b ;
}


// Function Expressions: a function can also be defined using an expression; //
// which can be stored in a variable

const x = function (a, b) { return a * b };
let z = x(4, 3);


// The Function() Constructor: functions can also be defined using a built-in JavaScript function constructor called Function()

const myFunction = new Function("a", "b", "return a * b");
let y = myFunction(4, 3);

// which is equivalent to...

const myFunction1 = function (a, b) { return a * b };
let y = myFunction1(4, 3);


// Function Hoisting: moving declarations to the top of the current scope; JavaScript functions can be called before they are declared

myFunction2(5);

function myFunction2(y) {
    return y * y;
}


// Self Invoking Functions: Function expressions can be made "self-invoking"

(function () {
    let x = "Hello!!";
})();


// Functions can be Used as Values

function myFunction3(a ,b) {
    return a * b;
}

let x = myFunction3(4, 3);



// Functions are Objects

function myFunction4(a, b) {
    return a * b;
}

let text = myFunction4.toString();


// ARROW FUNCTIONS: allow for short syntax for writing function expressions

// ES5
var x = function(x, y) {
    return x * y;
}

// ES6
const x = (x, y) => x * y;

/*
Arrow functions:
    -- do not have their own 'this'
    -- are NOT hoisted
    -- using consts are sader than using var
    -- can only omit the 'return' keyword and curly braces if the function is a SINGLE statement

*/

const y = (x, y) => { return x * y }



