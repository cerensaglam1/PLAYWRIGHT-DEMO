// tests/footer.spec.js
import { test, expect } from '@playwright/test';

test.setTimeout(90_000);

test('scroll to footer and verify links', async ({ page }) => {
  await page.goto('https://www.zara.com/us/en/search/home', {
    waitUntil: 'domcontentloaded',
    timeout: 45_000,
  });

  // dismiss overlays if they appear
  await page.getByRole('button', { name: /close/i }).click({ timeout: 3000 }).catch(() => {});
  await page.getByRole('button', { name: /continue/i }).click({ timeout: 3000 }).catch(() => {});
  await page.getByRole('button', { name: /accept.*cookies/i }).click({ timeout: 3000 }).catch(() => {});

  // 1) scroll to the footer (ARIA role first, then HTML <footer> as fallback)
  let footer = page.getByRole('contentinfo').first();
  await footer.scrollIntoViewIfNeeded().catch(async () => {
    footer = page.locator('footer').first();
    await footer.scrollIntoViewIfNeeded();
  });

  // 2) verify the column headers you see: HELP, FOLLOW US, COMPANY, POLICIES
  for (const heading of ['HELP', 'FOLLOW US', 'COMPANY', 'POLICIES']) {
    const h = footer.getByRole('heading', { name: new RegExp(`^${heading}$`, 'i') });
    await expect(h.or(footer.getByText(new RegExp(`^${heading}$`, 'i')))).toBeVisible();
  }

  // 3) verify a few key links exist
  for (const name of ['MY ZARA ACCOUNT', 'PRIVACY POLICY', 'TERMS OF USE']) {
    await expect(footer.getByRole('link', { name: new RegExp(name, 'i') })).toBeVisible();
  }

  // 4) (optional) click a footer link and assert navigation
  await Promise.all([
    page.waitForURL(/privacy|policy/i, { timeout: 30_000 }),
    footer.getByRole('link', { name: /PRIVACY POLICY/i }).click(),
  ]);
});
