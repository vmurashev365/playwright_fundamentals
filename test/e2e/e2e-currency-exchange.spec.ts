//npm run test:e2e

import { test, expect } from "@playwright/test"

test.describe.only("Currency exchange form", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click("//button[@id='signin_button']")
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("input[name='submit']")
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
    })

    test('Pay new payment', async ({ page }) => {
        await page.click("a[href='#ui-tabs-3']")
        await page.selectOption('#pc_currency', 'EUR')

        const rateEur = await page.locator('#sp_sell_rate')
        await expect(rateEur).toContainText('1 euro (EUR)')

        await page.type('#pc_amount', '1000')
        await page.click('#pc_inDollars_true')
        await page.click('#pc_calculate_costs')

        const convAmount = await page.locator('#pc_conversion_amount')
        await expect(convAmount).toContainText('(EUR)')

        await page.click('#purchase_cash')

        const alertSuccessMessage = await page.locator('#alert_content')
        await expect(alertSuccessMessage).toBeVisible
        await expect(alertSuccessMessage).toContainText('Foreign currency cash was successfully purchased')
    })
})