const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Test Case 3 - Add Multiple Items to Cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Add 2 products
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.addProductToCart('sauce-labs-bike-light');

    // Check cart badge
    const badgeCount = await productsPage.getCartBadgeCount();
    expect(badgeCount).toBe('2');

    // Go to cart
    await productsPage.goToCart();

    // Verify items in cart
    const cartItemCount = await cartPage.getCartItemCount();
    expect(cartItemCount).toBe(2);

    const itemNames = await cartPage.getCartItemNames();
    expect(itemNames).toContain('Sauce Labs Backpack');
    expect(itemNames).toContain('Sauce Labs Bike Light');
  });
});
