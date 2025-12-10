const BasePage = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      cartItems: '.cart_item',
      checkoutButton: '#checkout',
      continueShoppingButton: '#continue-shopping'
    };
  }

  async getCartItemCount() {
    return (await this.page.$$(this.selectors.cartItems)).length;
  }

  async proceedToCheckout() {
    await this.click(this.selectors.checkoutButton);
  }

  async continueShopping() {
    await this.click(this.selectors.continueShoppingButton);
  }
}

module.exports = { CartPage };
