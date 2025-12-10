// e2e-tests/tests/checkout.flow.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

// Test data
const testData = {
  users: {
    standard: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  },
  checkoutInfo: {
    firstName: 'John',
    lastName: 'Doe',
    zipCode: '12345'
  },
  products: ['sauce-labs-backpack', 'sauce-labs-bike-light']
};

test.describe('SauceDemo E2E Purchase Flow', () => {
  let loginPage, productsPage, cartPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  test('Complete purchase flow with standard user', async ({ page }) => {
    // 40. Login as standard_user/secret_sauce
    await test.step('40. Login with standard user', async () => {
      await loginPage.goto();
      await loginPage.login(
        testData.users.standard.username,
        testData.users.standard.password
      );
      await expect(page).toHaveURL(/.*inventory/);
    });

    // 41. Add 2 items from Products
    await test.step('41. Add 2 items to cart', async () => {
      for (const product of testData.products) {
        await productsPage.addProductToCart(product);
      }
      const badgeCount = await productsPage.getCartBadgeCount();
      expect(badgeCount).toBe(testData.products.length.toString());
    });

    // 42. Go to cart → Checkout
    await test.step('42. Go to cart and proceed to checkout', async () => {
      await productsPage.goToCart();
      const itemCount = await cartPage.getCartItemCount();
      expect(itemCount).toBe(testData.products.length);
      await cartPage.proceedToCheckout();
      await expect(page).toHaveURL(/.*checkout-step-one/);
    });

    // 43. Fill checkout info → Continue
    await test.step('43. Fill checkout information', async () => {
      await checkoutPage.fillCheckoutInformation(
        testData.checkoutInfo.firstName,
        testData.checkoutInfo.lastName,
        testData.checkoutInfo.zipCode
      );
      await expect(page).toHaveURL(/.*checkout-step-two/);
    });

    // 44. Verify overview totals → Finish
    await test.step('44. Verify order totals and complete purchase', async () => {
      const itemTotal = await checkoutPage.getItemTotal();
      const tax = await checkoutPage.getTax();
      const total = await checkoutPage.getOrderTotal();
      
      // Simple validation that totals are displayed
      expect(itemTotal).toBeTruthy();
      expect(tax).toBeTruthy();
      expect(total).toBeTruthy();
      
      await checkoutPage.finishCheckout();
    });

    // 45. Confirm Checkout: Complete! → Back Home
    await test.step('45. Verify order completion', async () => {
      await expect(page).toHaveURL(/.*checkout-complete/);
      const completeMessage = await checkoutPage.getCompleteMessage();
      expect(completeMessage).toContain('Thank you for your order');
      
      // Optional: Uncomment if you want to go back to home
      // await checkoutPage.goBackHome();
      // await expect(page).toHaveURL(/.*inventory/);
    });
  });
});