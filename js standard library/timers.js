// Timers

/* 
-- since the earliest days of JS, web browsers have
   defined two functions:

   setTimeout()
   setInterval()

   that allow programs to ask the browser to invoke 
   a functions after a specified amount of time or
   to invoke the function repeatedly at a specified interval

*/


// setTimeout() registers a function to be invoked once
setTimeout(() => { console.log("Ready...");}, 1000);
setTimeout(() => { console.log("set...");}, 2000);
setTimeout(() => { console.log("go!")} , 3000);

// setInterval() invokes a function repeatedly, every specified number
// of milliseconds


// once a second: clear the console and print current time
let clock = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

// after 10 seconds: stop the repeating code
setTimeout(() => {clearInterval(clock); }, 10000);


   