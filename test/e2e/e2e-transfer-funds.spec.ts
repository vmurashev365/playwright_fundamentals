//npm run test:e2e

import { test, expect} from "@playwright/test"

test.describe("Transfer Funds and Make Payments", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click("//button[@id='signin_button']")
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("input[name='submit']")
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    })

    test('Transfer Funds', async ({page}) => {
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.type('#tf_amount', '500')
        await page.type('#tf_description', 'Transfer description')
        await page.click('#btn_submit')

        const boardHeader = await page.locator('h2.board-header')
        await expect(boardHeader).toContainText('Verify')
        await page.click('#btn_submit')

        const alertSuccess = await page.locator('.alert-success')
        await expect(alertSuccess).toContainText('successfully submitted')
        await page.pause()

    })
})