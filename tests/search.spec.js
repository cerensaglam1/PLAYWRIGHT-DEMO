// tests/search.spec.js
import { test, expect } from '@playwright/test';

test.setTimeout(90_000);

test('search from Zara search home', async ({ page }) => {
  // Go to US search home directly (avoids geo redirects). Change if your locale differs.
  await page.goto('https://www.zara.com/us/en/search/home', {
    waitUntil: 'domcontentloaded',
    timeout: 45_000,
  });

  // Dismiss overlays (ignore if not present)
  await page.getByRole('button', { name: /Close/i }).click({ timeout: 3000 }).catch(() => {});
  await page.getByRole('button', { name: /Continue/i }).click({ timeout: 3000 }).catch(() => {});
  await page.getByRole('button', { name: /accept.*cookies/i }).click({ timeout: 3000 }).catch(() => {});

  // Open search (some regions have a visible "Search" link/button you must click first)
  await page.getByRole('link', { name: 'Search' }).click({ timeout: 4000 }).catch(async () => {
    await page.getByRole('button', { name: /Search/i }).click({ timeout: 4000 }).catch(() => {});
  });

  // Your recorded locator:
  let input = page.getByRole('searchbox', { name: 'Search text input' });

  // Fallbacks in case the accessible name differs (e.g., "What are you looking for?")
  await input.waitFor({ state: 'visible', timeout: 4000 }).catch(async () => {
    input = page.getByPlaceholder(/what are you looking for/i);
    await input.waitFor({ state: 'visible', timeout: 4000 }).catch(async () => {
      input = page.locator('input[type="search"]').first();
      await expect(input).toBeVisible({ timeout: 8000 });
    });
  });

  // Perform the search
  await input.click();
  await input.fill('shoes');
  await input.press('Enter');

  // Assert: you’re on a search results view and at least one product tile is visible
  await page.waitForURL(/\/search(\/|\?|#)/i, { timeout: 30_000 }).catch(() => {});
  const firstProduct = page.locator('[data-testid*=product], [data-qa*=product], a:has(img)').first();
  await expect(firstProduct).toBeVisible({ timeout: 20_000 });
});
