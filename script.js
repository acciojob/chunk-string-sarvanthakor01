function stringChop(str, size) {
  // your code here
	var result = [];
	for(var i = 0; i<str.length; i+= size){
		result.push(str.substring(i,i+size));
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
