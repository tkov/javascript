function insertionSort(array) {
	let n = array.length;

	for (let i = 1; i < n; i ++) {

		let curr = array[i];

		let j = i - 1;

		while ( ( j > - 1) && (curr < array[j] ) ){
			array[j + 1] = array[j]
			j--
		}

		array[j+1] = curr; 
	}

	return array;
}



const randomArray = (length, min, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * (max - min) + min));


a = randomArray(10, 0, 100);

console.log(insertionSort(a));