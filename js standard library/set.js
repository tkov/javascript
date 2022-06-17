// The Set Class

let s = new Set();
let t = new Set([1, s]);

let unique = new Set("Mississippi"); // => Set(4) {'M', 'i', 's', 'p'}
unique.size         // => 4

/*
Set Methods
-----------
add():  adds element
clear():  clears the set
delete(): removes element
entries():
forEach():
has(elem): returns true/false if elem part of set
size: returns length of set
values(): returns a set iterator
*/