// The Map Class

let m = new Map();
let n = new Map([
    ["one", 1],
    ["two", 2]
])

/*
-- the optional args to Map() constructor should be an iteratble object
   that yields two element [key, value] arrays
*/

let copy = new Map(n); // new Map with same keys/values as map n
let o = {x:1, y:2}     // an object...
let p = new Map(Object.entries(o)); 
// same as new Map([["x", 1], ["y", 2]])

/*
Map Methods
-----------
get(key): query the value of key
set(): add new key/value pair

has() : checks membership
delete() : removes key
clear() : removes all key/value pairs
size : returns number of keys

*/