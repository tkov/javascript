# Chapter 3: Types... Values... Variables

### 3.2.2 Arithmetic in JavaScript

```
Math.pow(2, 53)   // => 907199... : 2 to the power 53
Math.round(.6)  	// => 1.0
Math.ceil(.6) 		// => 1.0
Math.floor(.6) 		// => 0.0

Math.random()			// pseudo-random number 0 <= x < 1.0
Math.PI
Math.E
// ...
```

More functions on Math object in ES6


### 3.2.6 Dates and Times

```
let timestamp = Date.now(); 	// current time as timestamp
let now = new Date();					// current times as a Date object
// ...
```

### 3.3.3 Working with Strings

```
let msg = "Hello, " + "world";		// => "Hello, world"

// String API
// portions of a string
msg.substring(1,4) 			// => "ell"
msg.slice(1,4)					// => "ell"; same thing
msg.split(", ")					// => ["Hello", "world"]

// searching a string
msg.indexOf("l")				// => 2: position of first "l"
msg.indexOf("zz")				// => -1: does not include the substring "zz"
msg.lastIndexOf("l")		// => 10: position of last "l"

// boolean searching functions in ES6+
msg.startsWith("Hell")	// => true
msg.endsWith("!") 			// => false

// creating modified versions of a string (will return a new string -- strings are immutable)
msg.replace("llo", "ya")		// => "Heya, world"
msg.toLowerCase()						// => "hello, world"

// inspecting characters...
msg.charAt(0)								// => "H": the first character
msg.charAt(msg.length - 1)	// => "d": the last character

// string padding / trimming
"x".padStart(3)			// => "   x": adds 3 spaces on left side
" test ".trim()			// => "test": removes leading and trailing spaces
"test   ".trimEnd()	// => "test"

```

Strings can be treated like read-only character arrays
```
msg[0]  						// => "H"
msg[msg.length-1] 	// => "d"
```

### 3.3.4 Template Literals

Template Literals are defined with backticks

```
let name = "Frank";
let greeting = `Hello ${ name }.`;	// => "Hello Frank."
```

## 3.10 Variable Declaration and Assignment


### 3.10.1 Declaration with let and const 

In modern JavaScript (ES6+), variables are declared with the `let` keyword

```
let i;
let sum;
let i, sum;
```

To declare a constant, use the `const` keyword. These must be assigned a value when declared.

```
const H0 = 74;
```

### 3.10.3 Destructureing Assignment

```
let [x, y] = [1, 2]   // same as let x = 1, y = 2
[x,y] = [y,x] 			 	// swaps values
```

Destructuring assignment makes it easy to work with functions that return arrays of values

```
// Convert [x,y] coordinates to [r, theta] polar coordinates
function toPolar(x, y){
	return [Math.sqrt(x*x + y*y), Math.atan2(y,x)];
}
```

** Using destructuring assignment in for loops **

```
let o = {x: 1, y: 2};
for (const [name, value] of Object.entries(o)){
	console.log(name, value);				// Prints "x 1" and "y 2"
}
```




