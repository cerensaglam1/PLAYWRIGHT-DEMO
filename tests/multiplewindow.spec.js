const { test, expect } = require('@playwright/test');
test('multiple windows', async ({ browser }) => {
  const context = await browser.newContext();        // ← await here
  const page = await context.newPage();

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),                    // wait for new tab in this context
    page.locator('a[href*="facebook"]').first().click()  // ← no await here
  ]);

  await newPage.waitForLoadState();
  // e.g. verify it opened Facebook
  // await expect(newPage).toHaveURL(/facebook\.com/);

  await context.close();
});




 
