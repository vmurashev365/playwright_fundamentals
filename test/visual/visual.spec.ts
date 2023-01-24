import { test, expect } from '@playwright/test'

test.describe('Visual Regression Testing Example', () => {
    test('Full Page Snapshot', async ({ page }) => {
        await page.goto('http://www.example.com')
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
    })
})