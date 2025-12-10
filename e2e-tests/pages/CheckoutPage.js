const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      firstNameInput: '#first-name',
      lastNameInput: '#last-name',
      zipCodeInput: '#postal-code',
      continueButton: '#continue',
      finishButton: '#finish',
      completeHeader: '.complete-header',
      summaryTotal: '.summary_total_label',
      backHomeButton: '#back-to-products',
      itemTotal: '.summary_subtotal_label',
      tax: '.summary_tax_label',
      total: '.summary_total_label'
    };
  }

  async fillCheckoutInformation(firstName, lastName, zipCode) {
    await this.fill(this.selectors.firstNameInput, firstName);
    await this.fill(this.selectors.lastNameInput, lastName);
    await this.fill(this.selectors.zipCodeInput, zipCode);
    await this.click(this.selectors.continueButton);
  }

  async finishCheckout() {
    await this.click(this.selectors.finishButton);
  }

  async getCompleteMessage() {
    return this.getText(this.selectors.completeHeader);
  }

  async getOrderTotal() {
    return this.getText(this.selectors.total);
  }

  async getItemTotal() {
    return this.getText(this.selectors.itemTotal);
  }

  async getTax() {
    return this.getText(this.selectors.tax);
  }

  async goBackHome() {
    await this.click(this.selectors.backHomeButton);
  }
}

module.exports = { CheckoutPage };
