
const { sum, prod } =  require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);

});

test('prod calculates 2 * 10 = 20', () => {
	expects(prod(2, 10)).toBe(20);
})

