//11.10 Timers
let count = 0;

setTimeout(() => { console.log("Ready..."); }, 1000);
console.log("Counting");
let counter = setInterval(() => { 
	console.log(count++);
}, 1000);


// both setTimeout() and setInterval() return a value that can be used to cancel their execution with
// clearTimeout() and clearInterval(), respectively


// displaying a simple clock using setTimeout(), setInterval() and clearInterval()

// let clock = setInterval(() => {
// 	console.clear();
// 	console.log(new Date().toLocaleTimeString());
// }, 1000);

// // after 10 seconds: stop the repeating code above
// setTimeout(() => { clearInterval(clock); }, 10000);