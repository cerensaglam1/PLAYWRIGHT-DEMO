const{test,expect} = require("playwright/test")
test("Valid Login", async ({page})=>{

    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("aysim")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")
    //await page.keyboard.press("Enter")

})