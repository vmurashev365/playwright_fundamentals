//npm run tests:e2e

import { test, expect } from "@playwright/test"

import { FeedbackPage} from '../../page-objects/FeedbackPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe("Feedback form", () => {

    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({ page }) => {

        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)

        await homePage.visit()
        await homePage.clickOnFeedbackLink()
    })

    //Reset submit form
    test('Reset feedback form', async ({ page }) => {

        await feedbackPage.fillForm('name', 'email@email.com', 'subject', 'my awesome message')
        await feedbackPage.resetForm()
        await feedbackPage.assertReset()
        //await page.pause()
    })

    //Submit feedback form
    test('Submit feedback form', async ({page}) => {
        await feedbackPage.fillForm('some name', 'some_email@email.com', 'some subject', 'some nice comment about the application')
        await feedbackPage.submitForm()
        await feedbackPage.feedbackFormSent()
    })

})