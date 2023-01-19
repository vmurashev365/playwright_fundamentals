import { test, expect } from "@playwright/test"

test.describe("Feedback form", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com')
        await page.click('#feedback')
    })

    //Reset submit form
    test('Reset feedback form', async ({ page }) => {
        await page.type('#name', 'some name')
        await page.type('#email', 'some_email@mail.com')
        await page.type('#subject', 'some subject')
        await page.type('#comment', 'some nice comment about the application')
        await page.click("input[value='Clear']")

        const nameInput = await page.locator('#name')
        const commentInput = await page.locator('#comment')
        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
        //await page.pause()
    })

    //Submit feedback form
    test('Submit feedback form', async ({page}) => {
        await page.type('#name', 'some name')
        await page.type('#email', 'some_email@mail.com')
        await page.type('#subject', 'some subject')
        await page.type('#comment', 'some nice comment about the application')
        await page.click("input[name='submit']")
        await page.waitForSelector('#feedback-title')
        await page.pause()
    })

})