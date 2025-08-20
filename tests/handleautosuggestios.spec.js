const{test,expect} = require("playwright/test")
test("Valid Login", async ({page})=>{

    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("aysim")
    await page.waitForSelector("ul[role='listbox'] li[role='presentation']", { state: 'visible' });
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")

})