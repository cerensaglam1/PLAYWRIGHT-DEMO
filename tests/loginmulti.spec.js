const { test, expect } = require('@playwright/test');
// simplest way to load JSON in CommonJS:
//const data = require('../testdata.json'); // e.g. { "email": "admin@email.com", "password": "admin@123" }

test('multilogin', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');
  await page.locator('#email1').fill(data.email);              // or a string literal
  await page.locator('#password1').fill(data.password);
  await page.getByRole('button', { name: /sign in/i }).click();
  await expect(page).toHaveURL(/dashboard|home/i);             // adjust to your app
});
