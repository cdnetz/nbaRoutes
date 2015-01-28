var fun1 = function (num) {
	var bigArr = [0, 1];
	
	for (var i = 0; i < 99; i++){
		bigArr.push(bigArr[bigArr.length - 1] + bigArr[bigArr.length - 2]);
	}
	console.log(bigArr);
	
	if (bigArr.indexOf(num) === -1) {
		return false;
	};

	return true;
}

fun1(15);