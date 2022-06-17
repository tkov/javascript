/* merge sort implementations in javascript */


function mergeSort(array) {

	const len = array.length;

	if (len <= 1)
		return array;
	
	// grab the middle element index
	const m = Math.floor(len / 2);

	const left = array.slice(0, m);
	const right = array.slice(m);

	return merge(
		mergeSort(left),
		mergeSort(right)
		);
}


function merge(left, right) {
	outArray = [];
	leftIndex = 0, rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length){
		if (left[leftIndex] < right[rightIndex]){
			outArray.push(left[leftIndex]);
			leftIndex++;
		}
		else {
			outArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// concatenating...
	return outArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


function arrays_equal(a,b) { return !!a && !!b && !(a<b || b<a); }

const randomArray = (length, min, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * (max - min) + min));


const a = randomArray(2000, 50,1000);
const b = [... new Array(951).keys()].map((i) => i + 50);
// console.log(b[b.length-1]);

for(let i = 950; i < 10000; i++) {
	let aa = randomArray(i, 50, 1000);
	aa = mergeSort(aa);
	aa = [... new Set(aa)]

	// console.log(aa);


	if (arrays_equal(b, aa)){
		console.log(i)
		break;
	}

	// console.log(aa[aa.length-1]);
	// console.log(b[b.length-1]);


}

console.log(arrays_equal([1,2,3,4], [1,2,3,4]));


// console.log(b);