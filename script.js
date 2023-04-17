//your JS code here. If required.
var str = prompt("Enter the number of elements")
alert(getChar(str));

function getChar(word) {
	let freqArr = [];
	for (let i = 0; i < 26; i++) {
		freqArr.push(0);
	}

	for (let i = 0; i < word.length; i++) {
		freqArr[word.charCodeAt(i)-97]++;
	}
	console.log(freqArr);
	for (let i = 0; i < word.length; i++) {
		if(freqArr[word.charCodeAt(i)-97] == 1) return word.charAt(i);
	}

	return null;
}