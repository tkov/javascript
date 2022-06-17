function capitalize(str) {
	// let firstLetter = str[0].toUpperCase()
	let firstLetter = str.charAt(0).toUpperCase() // new and improved line!
	let rest = str.slice(1).toLowerCase()
	return firstLetter + rest 
}

module.exports = capitalize