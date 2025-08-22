class HomePage{


    constructor(page)
    {
        this.page=page
        this.menu ="//img[@alt='menu']"
        this.logoutoption= page.getByRole('link', { name: /sign out|logout/i });
    }

    async logoutFromAplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.logoutFromAplication)
    }

}

module.exports=HomePage
    