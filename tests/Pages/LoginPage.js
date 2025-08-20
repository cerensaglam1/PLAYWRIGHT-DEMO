// tests/Pages/LoginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.continueBtn    = page.getByRole('button', { name: /continue/i });
    this.loginLink      = page.getByRole('link', { name: 'LOG IN', exact: true });
    this.emailInput     = page.getByRole('textbox', { name: /enter your email/i });
    this.passwordInput  = page.getByRole('textbox', { name: /enter your password/i });
    this.loginBtn       = page.getByRole('button', { name: /log in/i });
    this.okBtn          = page.getByRole('button', { name: /^ok$/i });
  }

  async goto() {
    await this.page.goto('https://www.zara.com/us/en/search/home', {
      waitUntil: 'domcontentloaded',
      timeout: 45_000,
    });
  }

  async openLoginPanel() {
    await this.continueBtn.click({ timeout: 3_000 }).catch(() => {});
    await this.loginLink.click({ timeout: 8_000 });
    await expect(this.emailInput).toBeVisible({ timeout: 10_000 });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    await this.okBtn.click({ timeout: 3_000 }).catch(() => {});
  }
}

module.exports = { LoginPage };
