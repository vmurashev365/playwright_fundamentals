import { test, expect } from '@playwright/test'

import { LoginPage} from '../../page-objects/LoginPage'

//npm run tests:e2e

test.describe.only("login/Logout Flow", () => {
    let loginPage: LoginPage

    //Before Hook
    test.beforeEach(async({page}) => {

        loginPage = new LoginPage(page)
        await loginPage.visit()
        //await page.goto('http://zero.webappsecurity.com')
    })

    test("Negative Scenario for Login",async ({page}) => {
        //Negative Scenario
        await loginPage.login('invalid username', 'invalid password')
        await loginPage.assertErrorMessage()
    })

    test("Positive Scenario for Login",async ({page}) => {

        await loginPage.login('username','password')

        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

        const accountSummaryTab = await page.locator("//a[@class='brand']")
        await expect(accountSummaryTab).toBeVisible()
    })

})

