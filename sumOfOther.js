function sumOfOther(arr) {
	const result = [];
	const inputArr = arr;
	for (let i = 0, len = inputArr.length; i < len; i++) {
		var temp = inputArr.reduce(function(a, b) {
			return a + b;
		});
		result.push(temp-inputArr[i]);
	};
    return result;
};
module.exports = sumOfOther;