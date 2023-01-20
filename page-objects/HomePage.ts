import {expect, Locator, Page } from '@playwright/test'

export class HomePage{
// Define Selectors
    readonly page: Page
    readonly signinButton: Locator

//Init selectors using constructor
constructor (page: Page) {
    this.page = page
    this.signinButton = page.locator('#signin_button')
}


//Define login page methods
    async visit() {
        await this.page.goto('http://zero.webappsecurity.com')
    }

    async clickOnSignIn() {
        await this.signinButton.click()
    }
}