// reading a JSON file

const dictionaryJSON = require('./words_dictionary.json');

const newDict = {};

for (key in dictionaryJSON) {
	// console.log(String(key).length);
	newDict[key] = String(key).length;
}

//console.log(newDict);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function nLetterDictionary(n) {

	let nDict = {}

	for (key in newDict) {
		if (newDict[key] == n) {
			nDict[key] = newDict[key]
		}
	}

	return nDict;
}

let fiveDict = nLetterDictionary(5);

let len = Object.keys(fiveDict).length
console.log(len);

let index = getRandomInt(len);

function getObjectValueFromIndex(obj, index) {
	console.log(Object.keys(obj)[index], index);
}

getObjectValueFromIndex(fiveDict, index);