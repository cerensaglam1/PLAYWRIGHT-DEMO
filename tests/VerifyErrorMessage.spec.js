const{test,expect}= require('playwright/test')

test('verify error Message', async function({page})
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//console.log (await page.viewportSize().width)
//console.log (await page.viewportSize().height)

await page.getByPlaceholder("Username").fill("Admin")

await page.getByPlaceholder("Password").fill("1234")
await page.getByRole('button', { name: 'Login' }).click();
const errorMessage = await expect(page.getByText('Invalid credentials')).toBeVisible();
console.log("error message"+ errorMessage);
expect(errorMessage==="Invalid credentials").toBeTruthy
})