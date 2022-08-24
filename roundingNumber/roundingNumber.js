// 0 - 1000 = 400 = 400
// 1000 - 999 999 = 5000 / 1000 = 5K
// 999 999 - 999 999 999 = 25 000 000 / 1 000 000 = 25M
// 999 999 999 - 999 999 999 999 = 5 000 000 000 / 1 000 000 000 = 5B
// 567849.9200455 = 567.84K
// 399323484.0864 = 399.32M

const isFlouting = (num) => {
	if(!Number.isInteger(num) && typeof num === 'number') {
		return true
	} else 
		return false
}

const buildFloutNumber = (result, letter) => {
	return result.toFixed(2).toString().split('.')[1][1] > 0 ? result.toFixed(2) + letter : result.toFixed(1) + letter;
}

function roundingNumber (num) {
	if(!num || num < 0 || num > 999_999_999_999)
		return -1

	if(num >= 0 && num <= 1000) {
		return num;
	}

	if(num >= 1000 && num <= 999_999) {
		const result = num / 1000;
		
		if (isFlouting(result)) {
			return buildFloutNumber(result, 'K');
		} else {
			return result + 'K';
		}
	}

	if(num >= 999_999 && num <= 999_999_999) {
		const result = num / 1_000_000;

		if (isFlouting(result)) {
			return buildFloutNumber(result, 'M')
		} else {
			return result + 'M';
		}
	}

	if(num >= 999_999_999 && num <= 999_999_999_999) {
		const result = num / 1_000_000_000;

		if (isFlouting(result)) {
			return buildFloutNumber(result, 'B')
		} else {
			return result + 'B';
		}
	}

}

module.exports = {
	isFlouting,
	roundingNumber,
	buildFloutNumber
};