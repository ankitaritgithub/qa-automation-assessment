class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productGrid = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('select[data-test="product_sort_container"]');
    this.productPrices = page.locator('.inventory_item_price');
  }

  async addProductToCart(productName) {
    await this.page.locator(`[data-test="add-to-cart-${productName}"]`).click();
  }

  async getCartBadgeCount() {
    return await this.cartBadge.textContent();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async sortProducts(option) {
    try {
      // Wait for the dropdown to be visible and select the option
      await this.sortDropdown.waitFor({ state: 'visible', timeout: 10000 });
      
      // Use the direct value for selection
      await this.sortDropdown.selectOption(option);
      
      // Wait for the products to update after sorting
      await this.page.waitForTimeout(1000);
      
      // Wait for the first product price to be visible
      await this.productPrices.first().waitFor({ state: 'visible' });
      
    } catch (error) {
      console.error('Error in sortProducts:', error);
      throw error; // Re-throw the error to fail the test
    }
  }

  async isProductGridVisible() {
    return await this.productGrid.isVisible();
  }
}

module.exports = { ProductsPage };
