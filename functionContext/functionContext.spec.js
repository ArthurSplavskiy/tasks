const add = require('./functionContext');

test('add function working correct', () => {
	expect(add(1, 1)).toBe(0)
	expect(add(3, 10)).toBe(2)
	expect(add(2, 3)).toBe(13)
})