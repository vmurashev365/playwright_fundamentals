import { test, expect } from '@playwright/test'

import { loadHomePage, assertTitle } from '../helpers'

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


test("Working with inputs @Input", async ({ page }) => {

    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click('button#signin_button')

    await page.type('#user_login', 'username')
    await page.type('#user_password', 'some_password')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test("Assertions @Assertion", async ({ page }) => {
    await page.goto('https://www.example.com')
    await expect(page).toHaveURL('https://www.example.com')
    await expect(page).toHaveTitle('Example Domain')

    const element = await page.locator('h1')
    await expect(element).toBeVisible()
    await expect(element).toHaveText('Example Domain')
    await expect(element).toHaveCount(1)

    const nonExistingElement = await page.locator('h5')
    await expect(nonExistingElement).not.toBeVisible()
})


test.describe.parallel.only('Hooks', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.example.com')
    })
    test("Screenshots @Screenshot", async ({ page }) => {

        //await page.goto('https://www.example.com')
        await page.screenshot({ path: 'screenshot.png', fullPage: true })
    })

    test("Single element Screenshots @Screenshot", async ({ page }) => {
        //await page.goto('https://www.example.com')
        const elementOfPage = await page.$('h1')
        await elementOfPage?.screenshot({ path: 'single_element_screenshot.png' })
    })

})

//npm run tests:chrome
//npm run tests:firefox
//npm run tests:webkit

test("Custom helpers ", async ({ page }) => {
await loadHomePage(page)
//await page.pause()
await assertTitle(page)
})
