import {expect, Locator, Page } from '@playwright/test'

export class LoginPage{
// Define Selectors
    readonly page: Page
    readonly signinButton: Locator
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator

//Init selectors using constructor
constructor (page: Page) {
    this.page = page
    this.signinButton = page.locator('#signin_button')
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator("input[name='submit']")
    this.errorMessage = page.locator('.alert-error')
}

//Define login page methods
    async visit() {
        await this.page.goto('http://zero.webappsecurity.com')
    }

    async login(username: string, password: string) {
        await this.signinButton.click()
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
        //await this.page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText('Login and/or password are wrong')
    }
}