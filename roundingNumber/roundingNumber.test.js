const { roundingNumber, isFlouting, buildFloutNumber } = require('./roundingNumber');

describe('Testing roundingNumber functions', () => {

	test('function return value', () => {
		expect(roundingNumber()).toBeDefined();
	});

	test('function return -1 if num < 0 || num > 999 Billions or num == falsy value', () => {
		expect(roundingNumber(-5.3)).toBe(-1);
		expect(roundingNumber(999_999_999_999_999)).toBe(-1);
		expect(roundingNumber(null)).toBe(-1);
		expect(roundingNumber()).toBe(-1);
	});

	test('function return correct format', () => {
		expect(roundingNumber(500)).toBe(500);
		expect(roundingNumber(5000)).toBe('5K');
		expect(roundingNumber(4324)).toBe('4.32K');
		expect(roundingNumber(67_300_000)).toBe('67.3M');
		expect(roundingNumber(3_400_340_439)).toBe('3.4B');
	});

	test('function return correct format for flouting numbers', () => {
		expect(roundingNumber(875728.0432)).toBe('875.73K')
		expect(roundingNumber(423424324.435432)).toBe('423.42M')
		expect(roundingNumber(875284324234.0432)).toBe('875.28B')
	});

	test('isFloating function return correct value', () => {
		expect(isFlouting(321.21)).toBe(true);
		expect(isFlouting(321)).toBe(false);
		expect(isFlouting('')).toBe(false);
	});

	test('buildFloutNumber function working correct', () => {
		expect(buildFloutNumber(7.746673, 'K')).toBe('7.75K');
	});

});
