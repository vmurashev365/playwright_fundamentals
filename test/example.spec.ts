import { test, expect } from '@playwright/test'

test("Simple basic test", async ({ page }) => {
    await page.goto('https://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')

})

test("Clicking on elements", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click('button#signin_button')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test("Working with inputs", async({ page }) => {

    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click('button#signin_button')

    await page.type('#user_login', 'username')
    await page.type('#user_password', 'some_password')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
