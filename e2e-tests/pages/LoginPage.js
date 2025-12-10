const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = {
      usernameInput: '#user-name',
      passwordInput: '#password',
      loginButton: '#login-button',
      errorMessage: '.error-message-container'
    };
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.fill(this.selectors.usernameInput, username);
    await this.fill(this.selectors.passwordInput, password);
    await this.click(this.selectors.loginButton);
  }
}

module.exports = { LoginPage };
