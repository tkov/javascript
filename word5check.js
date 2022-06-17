const targetWord = "cemel"


function checkWord(target, user) {
	out = Array(5);	

	console.log("Target: " + target);
	console.log("User: " + user);

	if (user.length != 5) {
		console.log("Word is not 5 letters long...");
		return
	}

	const targetArray = [...target];
	const userArray = [...user];
	console.log(targetArray);

	for (c of targetArray) {
		console.log(c);
	}

	// check actual position first... then check if exists within it

	// CAPITAL - SAME POSITION
	// lowercase - contains letter

	// String.includes(...), Array.includes(...)

	for (const i in target) {
		if (targetArray[i] === user[i]) {
			out[i] = target[i].toUpperCase();
			userArray[i] = null
			targetArray[i] = null;
		}
	}

	console.log(`After passing position we have ${out}`);

	for (const i in target) {
		if (userArray[i] !== null && targetArray.includes(user[i])) {
			console.log(`Match found: ${user[i]}`);
			let index = targetArray.indexOf(user[i]);
			targetArray[index] = null;
			out[i] = user[i] + '*';
		}
		else if (out[i] == null) {
			out[i] = user[i];
		}
	}

	console.log(targetArray);
	console.log(out);
}

checkWord(targetWord, "rempe");
