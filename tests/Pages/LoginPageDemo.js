class LoginPageDemo{

    constructor(page)

{
this.page = page;
    this.userName = page.locator('#email1');         // or: page.getByPlaceholder('Enter Email')
    this.password = page.locator('#password1');      // or: page.getByPlaceholder('Enter Password')
    this.loginButton = page.getByRole('button', { name: /sign in/i });

}
async loginToApplication()
{
   await this.page.fill(this.userName,"admin@email.com") 
   await  this.page.fill(this.password,"admin@123")
   await this.page.click(this.loginButton)
   //await this.page.pause()
}

}
module.exports=LoginPageDemo