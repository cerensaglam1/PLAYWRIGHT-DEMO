// tests/Home.spec.js
const { test, expect } = require('@playwright/test');

test.setTimeout(90_000); // give extra time for first load

test('Zara search home loads (US)', async ({ page }) => {
  await page.goto('https://www.zara.com/us/en/search/home', {
    waitUntil: 'domcontentloaded',
    timeout: 45_000
  });

  // Dismiss region/cookie overlays if they appear (ignore if not present)
  await page.getByRole('button', { name: /continue/i }).click({ timeout: 3_000 }).catch(() => {});
  await page.getByRole('button', { name: /accept.*cookies/i }).click({ timeout: 3_000 }).catch(() => {});

  // The search home should expose a search input
  const searchInput = page.locator('input[type="search"], input[placeholder*="Search"]').first();
  await expect(searchInput).toBeVisible({ timeout: 15_000 });

  // URL/title sanity
  await expect(page).toHaveURL(/zara\.com\/us\/en\/search\/home/i, { timeout: 15_000 });
  await expect(page).toHaveTitle(/zara/i);
});

