const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test.describe('Login Tests', () => {
  test('Test Case 1 - Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Assertions
    await expect(page).toHaveURL(/.*inventory/);
    await expect(productsPage.productGrid).toBeVisible();
  });

  test('Test Case 2 - Invalid Login (Locked User)', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    // Assertions
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toContain('locked out');
  });
});
