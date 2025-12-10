const { isValidEmail, calculateDiscount, formatCurrency } = require('../utils/validators');

describe('Email Validation', () => {
  test('should return true for valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
  });

  test('should return false for invalid email', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test @example.com')).toBe(false);
  });

  test('should return false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  test('should return false for non-string input', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(123)).toBe(false);
  });
});

describe('Discount Calculation', () => {
  test('should calculate discount correctly', () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(50, 20)).toBe(40);
  });

  test('should handle 0% discount', () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });

  test('should handle 100% discount', () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });

  test('should throw error for negative values', () => {
    expect(() => calculateDiscount(-100, 10)).toThrow('Invalid values');
    expect(() => calculateDiscount(100, -10)).toThrow('Invalid values');
  });

  test('should throw error for discount > 100', () => {
    expect(() => calculateDiscount(100, 150)).toThrow('Invalid values');
  });

  test('should throw error for invalid input types', () => {
    expect(() => calculateDiscount('100', 10)).toThrow('Invalid input types');
    expect(() => calculateDiscount(100, '10')).toThrow('Invalid input types');
  });
});

describe('Currency Formatting', () => {
  test('should format USD correctly', () => {
    // Using toContain to handle different currency symbols based on environment
    expect(formatCurrency(100)).toContain('100.00');
    expect(formatCurrency(1234.56)).toContain('1,234.56');
  });

  test('should format EUR correctly', () => {
    const result = formatCurrency(100, 'EUR');
    expect(result).toContain('100.00');
    expect(result).toContain('€'); // Euro symbol
  });

  test('should handle decimal values', () => {
    expect(formatCurrency(10.5)).toContain('10.50');
    expect(formatCurrency(0.99)).toContain('0.99');
  });

  test('should throw error for non-number input', () => {
    expect(() => formatCurrency('100')).toThrow('Amount must be a number');
    expect(() => formatCurrency(null)).toThrow('Amount must be a number');
    expect(() => formatCurrency(undefined)).toThrow('Amount must be a number');
  });
});
