import { expect } from "@playwright/test"

exports.loginPage = class loginPage{

    constructor(page){

        this.page = page
        this.logo = page.locator('//img[@alt="company-branding"]')
        this.usernameInput = page.locator('input[name="username"]')
        this.passwordInput = page.locator('input[types="password"]')
        this.loginButton = page.locator('button[types="submit"]')
        this.loginErrorMessage = page.locator("//p[test()='Invalid Credentials']")

    }

    async launchUrl(){

        this.page.goto("/web/index.php/auth/login")
        
    }

    async verifyLogin(){

        await expect(this.login).toBeVisible()

    }

    async loginwithCredential(username,password){

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async loginError(){

        await expect(this.loginErrorMessage).toBeVisible()

    }

    async loginSuccess(){

        await expect(this.page).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}