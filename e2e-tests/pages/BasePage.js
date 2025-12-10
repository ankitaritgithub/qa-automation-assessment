class BasePage {
  constructor(page) {
    this.page = page;
  }

  async waitForElement(selector, timeout = 10000) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
  }

  async click(selector) {
    await this.waitForElement(selector);
    await this.page.click(selector);
  }

  async fill(selector, text) {
    await this.waitForElement(selector);
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    await this.waitForElement(selector);
    return this.page.textContent(selector);
  }
}

module.exports = BasePage;
