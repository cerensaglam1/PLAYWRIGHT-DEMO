const{test,expect} = require("playwright/test")
test("Handle Alert", async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.locator("//button[text()='Click for JS Alert']").click()







})