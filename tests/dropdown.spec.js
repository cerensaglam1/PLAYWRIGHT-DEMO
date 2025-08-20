const {test,expect}=require("playwright/test")

test("select values from dropdwon", async function({page})
{

await page.goto("https://freelance-learn-automation.vercel.app/signup")

await page.locator("#state").selectOption({label:"Goa"})
await page.waitForTimeout(5000)
await page.locator("#state").selectOption({value:"Himachal Pradesh"})
await page.waitForTimeout(5000)
await page.locator("#state").selectOption({index:4})
await page.waitForTimeout(1000)

const value = await page.locator("#state").textContent()
console.log("All dropdown values"+ value);
await expect(value.includes("Kerala")).toBeTruthy()

//one more way to verify value from dropdown
//let state = await page.$("#state")
//let allElements=await state.$$("option")

//let ddstatus=false
//for(let i=0; i<allElements.length;i++)
//{
    //let element= allElements[i]
   //let value= await element.textContent()
   //if(value.i("Rajasthan")){
   // ddstatus=true
   // break
   //}
   //console.log("valie from dropdown"+ value)
  // await expect(ddstatus).toBeTruthy()
//}

await page.locator("#hobbies").selectOption(['Playing','Swimming'])
await page.waitForTimeout(3000)
})

