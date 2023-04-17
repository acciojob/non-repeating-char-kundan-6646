//your JS code here. If required.
var str = prompt("Enter the number of elements");
alert(getChar(str));

function getChar(word) {
	let idx = 0;
	while(idx < word.length) {
		let j = idx;
		let cc = word.charAt(idx);
		while(j < word.length && cc == word.charAt(j)) j++;

		if(j-idx == 1) return cc;
		idx = j;
	}

	return '';
}