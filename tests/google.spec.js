const{test,expect}=require('playwright/test')

test("verify google Application title", async function({page}){
    await page.goto("http://google.com")
   const url= await page.url()
   console.log("title is "+ url);

   const title = await page.title()
   console.log("title is" + title)

   expect(page).toHaveTitle("Google")
   

})