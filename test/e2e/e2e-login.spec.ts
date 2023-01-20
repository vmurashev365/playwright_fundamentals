import { test, expect } from '@playwright/test'

import { LoginPage} from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

//npm run tests:e2e

test.describe.only("login/Logout Flow", () => {
    let loginPage: LoginPage
    let homePage: HomePage

    //Before Hook
    test.beforeEach(async({page}) => {

        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        await homePage.visit()
    })

    test("Negative Scenario for Login",async ({page}) => {
        //Negative Scenario
        await homePage.clickOnSignIn()
        await loginPage.login('invalid username', 'invalid password')
        await loginPage.assertErrorMessage()
    })

    test("Positive Scenario for Login",async ({page}) => {
        await homePage.clickOnSignIn()
        await loginPage.login('username','password')

        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

        const accountSummaryTab = await page.locator("//a[@class='brand']")
        await expect(accountSummaryTab).toBeVisible()
    })

})

