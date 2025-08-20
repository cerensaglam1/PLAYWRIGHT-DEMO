const{test,expect} = require("playwright/test")
test('Verify file upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator('#file-upload').setInputFiles("./upload/myImage.png.jpg"); // or the corrected absolute path
  
  await page.locator("#file-submit").click()
 
});
