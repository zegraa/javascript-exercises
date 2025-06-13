const numberChecker = require('./numberChecker')

console.log(numberChecker(1000)); // Should print "true"
console.log(numberChecker(6)); // Should print "false"

describe('numberChecker', () => {
  test('returns true when number is 1000', () => {
    expect(numberChecker(1000)).toEqual(true);
  });
  testskip(returns true when number is 10', () => {
    expect(numberChecker(10)).toEqual(true);
  });
  test.skip('returns false when number is 9', () => {
    expect(numberChecker(9)).toEqual(false);
  });
  test.skip('returns false when number is 6', () => {
    expect(numberChecker(6)).toEqual(false);
  });
});
