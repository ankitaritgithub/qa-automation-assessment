const { isValidEmail } = require('../utils/validators');

test('should validate email', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});
