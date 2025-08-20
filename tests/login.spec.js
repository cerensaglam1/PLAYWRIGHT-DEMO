const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/LoginPage');

test.setTimeout(90_000);

test('can open Zara login panel', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.openLoginPanel();
  await expect(page.getByRole('textbox', { name: /enter your email/i })).toBeVisible();
});
