const BasePage = require('./BasePage');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      productItem: '.inventory_item',
      addToCartButton: (productId) => `#add-to-cart-${productId}`,
      cartBadge: '.shopping_cart_badge',
      cartLink: '.shopping_cart_link',
    };
  }

  async addProductToCart(productId) {
    const buttonSelector = this.selectors.addToCartButton(productId);
    await this.click(buttonSelector);
  }

  async getCartBadgeCount() {
    try {
      return await this.page.textContent(this.selectors.cartBadge);
    } catch {
      return '0';
    }
  }

  async goToCart() {
    await this.click(this.selectors.cartLink);
  }
}

module.exports = { ProductsPage };
