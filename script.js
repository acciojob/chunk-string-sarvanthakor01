function stringChop(str, size) {
  // your code here
	if (!str) {
		return [];
	}
	let result = [];
	for(let i = 0; i<str.length; i= i+ size){
		 result = result.concat(str.substring(i, i + size));
	}
	return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
