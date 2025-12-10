const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.goToCart();
    await cartPage.proceedToCheckout();
  });

  test('Test Case 4 - Checkout Your Information', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');

    // Verify on overview page
    await expect(page).toHaveURL(/.*checkout-step-two/);
  });

  test('Test Case 5 - Finish Checkout', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillCheckoutInformation('John', 'Doe', '12345');
    await checkoutPage.finishCheckout();

    // Verify completion message
    const completeMsg = await checkoutPage.getCompleteMessage();
    expect(completeMsg).toContain('Thank you for your order');
  });
});
