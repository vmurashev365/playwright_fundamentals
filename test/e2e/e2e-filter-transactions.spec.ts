//npm run test:e2e

import { test, expect } from "@playwright/test"

test.describe("Filter Transactions", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click("//button[@id='signin_button']")
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("input[name='submit']")
        await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
    })

    test('Verify the results for each account', async ({ page }) => {
        await page.selectOption('#aa_accountId', '2')
        const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingAccount).toHaveCount(3)

        await page.selectOption('#aa_accountId', '4')
        const checkingLoan = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingLoan).toHaveCount(2)

        await page.selectOption('#aa_accountId', '6')
        const checkingBrokerage = await page.locator('.well')
        await expect(checkingBrokerage).toBeVisible()

        await page.pause()

    })
})