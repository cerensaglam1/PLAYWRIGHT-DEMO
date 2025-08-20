const {test,expect}=require("playwright/test")

test("valid login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("username").fill("Admin",{delay:200})
    await page.locator("//input[@type='password']").fill("admin123",{delay:100})
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/, { timeout: 15000 });
    await page.getByAltText("profile picture").click()
    // open the user menu (more reliable than the image)
    await page.locator('.oxd-userdropdown-tab').click();

// wait until the dropdown is actually visible
    const menu = page.locator('ul.oxd-dropdown-menu');
    await expect(menu).toBeVisible();

// click Logout (correct role)
   await menu.getByRole('menuitem', { name: 'Logout' }).click();
   await expect(page).toHaveURL(/login/)



    




})