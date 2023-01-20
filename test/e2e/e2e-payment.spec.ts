//npm run test:e2e

import { test, expect } from "@playwright/test"

test.describe("New payment", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click("//button[@id='signin_button']")
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("input[name='submit']")
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
    })

    test('Pay new payment', async ({ page }) => {
        await page.selectOption('#sp_payee', 'apple')
        await page.click('#sp_get_payee_details')
        await page.waitForSelector('#sp_payee_details')

        await page.selectOption('#sp_account', '6')
        await page.type('#sp_amount', '5000')
        await page.type('#sp_date', '2023-01-20')
        await page.type('#sp_description', 'Payment message')
        await page.click('#pay_saved_payees')

        const successAlert = await page.locator('#alert_content > span')
        await expect(successAlert).toBeVisible()
        await expect(successAlert).toHaveText('The payment was successfully submitted.')

        await page.pause()

    })
})