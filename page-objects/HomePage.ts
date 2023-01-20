import {expect, Locator, Page } from '@playwright/test'

export class HomePage{
// Define Selectors
    readonly page: Page
    readonly signinButton: Locator
    readonly searchBox: Locator
    readonly linkFeedBack: Locator

//Init selectors using constructor
constructor (page: Page) {
    this.page = page
    this.signinButton = page.locator('#signin_button')
    this.searchBox = page.locator('#searchTerm')
    this.linkFeedBack = page.locator('#feedback')
}


//Define login page methods
    async visit() {
        await this.page.goto('http://zero.webappsecurity.com')
    }

    async clickOnSignIn() {
        await this.signinButton.click()
    }

    async searchFor(phrase: string) {
        await this.searchBox.type(phrase)
        await this.page.keyboard.press('Enter')
    }

    async clickOnFeedbackLink() {
        await this.linkFeedBack.click()
    }
}