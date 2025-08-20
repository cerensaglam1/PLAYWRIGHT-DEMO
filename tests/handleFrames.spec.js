const { test, expect } = require('@playwright/test');

test('Handle Frames', async ({ page }) => {
  await page.goto('https://docs.oracle.com/javase/8/docs/api/');

  // left pane: package list
  const pkgList = page.frameLocator('frame[name="packageListFrame"]');
  await pkgList.getByRole('link', { name: 'java.applet' }).click();

  // middle pane: package contents (optional next step)
  // const pkgFrame = page.frameLocator('frame[name="packageFrame"]');
  // await pkgFrame.getByRole('link', { name: 'Applet' }).click();

  await page.pause();
});
