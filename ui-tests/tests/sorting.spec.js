const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test.describe('Sorting Tests', () => {
  test('Test Case 6 - Sort Products by Price Low to High', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Navigate and login
    console.log('Navigating to login page...');
    await loginPage.goto();
    console.log('Logging in...');
    await loginPage.login('standard_user', 'secret_sauce');

    // Wait for products to be visible
    console.log('Waiting for products to be visible...');
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Take a screenshot before sorting
    console.log('Taking before-sort screenshot...');
    await page.screenshot({ path: 'before-sort.png' });

    // Sort products by price low to high
    console.log('Selecting sort option...');
    await page.selectOption('select.product_sort_container', 'lohi');
    
    // Wait for the products to update
    console.log('Waiting for products to sort...');
    await page.waitForTimeout(2000);

    // Take a screenshot after sorting
    console.log('Taking after-sort screenshot...');
    await page.screenshot({ path: 'after-sort.png' });

    // Get all product prices
    console.log('Getting product prices...');
    const priceElements = await page.locator('.inventory_item_price').all();
    const prices = [];
    
    for (const element of priceElements) {
      const priceText = await element.textContent();
      const price = parseFloat(priceText.replace('$', ''));
      prices.push(price);
    }

    // Log the prices for debugging
    console.log('Prices after sorting:', prices);

    // Verify prices are in ascending order
    console.log('Verifying sort order...');
    for (let i = 0; i < prices.length - 1; i++) {
      expect(prices[i], `Price at index ${i} (${prices[i]}) should be <= price at index ${i+1} (${prices[i+1]})`)
        .toBeLessThanOrEqual(prices[i + 1]);
    }

    // Verify the first product price is as expected
    const firstPrice = await page.locator('.inventory_item_price').first().textContent();
    console.log('First product price after sorting:', firstPrice);
    expect(firstPrice, 'First product price should be $7.99').toBe('$7.99');
    
    console.log('Test completed successfully!');
  });
});
