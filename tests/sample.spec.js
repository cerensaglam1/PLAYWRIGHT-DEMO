const {test,expect}= require('playwright/test')

test("My first test", async function({page}){

    expect(12).toBe(12)

})

test.skip("my secons test", async function({page}){

    expect(100).toBe(101)

})

test.only("my third test", async function({page}){
    expect("aysim").toContain("aysim")
    expect(true).toBeTruthy()

})

test("my fourth test", async function({page}){
    expect("aysim".includes("m")).toBeTruthy

})