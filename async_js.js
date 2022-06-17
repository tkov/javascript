async function myFunction() {
    return "hello";
}

// the same as..

async function myFunction2() {
    return Promise.resolve("hello");
}


// using the function...

myFunction2().then(
    function (value) { /* code if successful */},    // note: these are anonymous functions
    function (error) { /* code if some error */ }
)


// JavaScript Callbacks: a function passed as an argument to another function

// Function Sequence: functions are executed in the sequence they are called, not defined...

function myFirst() {
    myDisplayer("Hello");
}

function mySecond(){
    myDisplayer("Goodbye");
}

myFirst();
mySecond();

// Sequence Control

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5,5,);
myDisplayer(result);

// or... you could call a calculator function (myCalculator) and let that function call the display function (myDisplayer)

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}

myCalculator(5,5);

// OR... just call the calculator function with a callback...

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}


// Asyncronous JavaScript



// Waiting for a Timeout
setTimeout(callbackFunction, 3000);

setTimeout(function () { myFunction("I love you!"); }, 3000);

function myFunction(value) {
    document.getElementById("demo").innerHTML = value;
}


// Waiting for an Interval

setInterval(myFunction, 1000);  // myFunction will be called every 1 second (1000 ms)


// Waiting for a File

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(this.responseText);      // XMLHttpRequest.responseText
        } else {
            myCallback("Error:" = req.status);
        }
    }
    req.send();
}

