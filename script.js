let origArray = [2, 3, 4];

function populateTextboxes() {
	document.getElementById("textbox1").value = origArray[0];
	document.getElementById("textbox2").value = origArray[1];
	document.getElementById("textbox3").value = origArray[2];
}

document.addEventListener("DOMContentLoaded", function() {
	populateTextboxes();

	document.getElementById("cubeBtn").addEventListener("click", function() {
		let cubeArray = origArray.map(function(num) {
			return num ** 3;
		});

		document.getElementById("textbox1").value = cubeArray[0];
		document.getElementById("textbox2").value = cubeArray[1];
		document.getElementById("textbox3").value = cubeArray[2];
	});

	document.getElementById("fourthPowerBtn").addEventListener("click", fourthPowerValues);
});

function squareValues() {
	let squareArray = origArray.map(function(num) {
		return num ** 2;
	});

	document.getElementById("textbox1").value = squareArray[0];
	document.getElementById("textbox2").value = squareArray[1];
	document.getElementById("textbox3").value = squareArray[2];
}

function fourthPowerValues() {
	let fourthPowerArray = origArray.map(function(num) {
		return num ** 4;
	});

	document.getElementById("textbox1").value = fourthPowerArray[0];
	document.getElementById("textbox2").value = fourthPowerArray[1];
	document.getElementById("textbox3").value = fourthPowerArray[2];
}



