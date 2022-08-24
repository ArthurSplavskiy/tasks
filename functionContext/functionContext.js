// add(1, 1) - 0
// add(2, 2) - 2
// add(3, 4) - 4
// add(9, 9) - 7

function add(a, b) {
	const result = this.prevValue ? this.prevValue : 0
	console.log(this.prevValue ? this.prevValue : 0);
	this.prevValue = a + b;
	return result
}

module.exports = add;