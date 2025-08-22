const { test, expect } = require('@playwright/test');
const LoginPage= require("./Pages/LoginPageDemo")
const HomePage=require("./Pages/homepage")

test('multilogin', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  const LoginPageDemo= new LoginPage(page)
  await LoginPageDemo.loginApplication

  const homepage = new HomePage(page)
  await homepage.logoutFromAplication



});
