import { test, expect } from '@playwright/test'

//npm run tests:e2e

test.describe("login/Logout Flow", () => {

    test.beforeEach(async({page}) => {
        await page.goto('http://zero.webappsecurity.com')
    })

    test.skip("Negative Scenario for Login",async ({page}) => {
        await page.click("//button[@id='signin_button']")
        await page.type('#user_login', 'invalid-username')
        await page.type('#user_password', 'invalid-password')
        await page.click("input[name='submit']")

        const errorMessage = await page.locator('.alert-error')
        await expect(errorMessage).toContainText("Login and/or password are wrong.")
    })

    test.skip("Positive Scenario for Login",async ({page}) => {
        await page.click("//button[@id='signin_button']")
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("input[name='submit']")
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')

        const accountSummaryTab = await page.locator("//a[@class='brand']")
        await expect(accountSummaryTab).toBeVisible()
    })

})

