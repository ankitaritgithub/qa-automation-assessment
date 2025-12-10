// unit-tests/utils/validators.js
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  if (email.length === 0) return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function calculateDiscount(price, discountPercent) {
  if (typeof price !== 'number' || typeof discountPercent !== 'number') {
    throw new Error('Invalid input types');
  }
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Invalid values');
  }
  
  return price - (price * discountPercent / 100);
}

function formatCurrency(amount, currency = 'USD') {
  if (typeof amount !== 'number') {
    throw new Error('Amount must be a number');
  }
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  
  return formatter.format(amount);
}

module.exports = { isValidEmail, calculateDiscount, formatCurrency };
