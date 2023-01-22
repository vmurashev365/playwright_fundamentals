import { Locator, Page } from '@playwright/test'

export class Navbar {
    // Define Selectors
    readonly page: Page
    readonly accountSummary: Locator
    readonly accountActivity: Locator
    readonly transferFunds: Locator
    readonly payBills: Locator
    readonly myMoneyApp: Locator
    readonly onlineStatemets: Locator

    //Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.accountSummary = page.locator('#account_summary_tab')
        this.accountActivity = page.locator('#account_activity_tab')
        this.transferFunds = page.locator("#transfer_funds_tab")
        this.payBills = page.locator('#pay_bills_tab')
        this.myMoneyApp = page.locator('#money_map_tab')
        this.onlineStatemets = page.locator('#online_statement_tab')
    }

    //Define navbar page methods

    async clickOnTab(tabName) {
        switch (tabName) {
            case 'Account Summary':
                await this.accountSummary.click()
                break
            case 'Account Activity':
                await this.accountSummary.click()
                break
            case 'Transfer Fund':
                await this.transferFunds.click()
                break
            case 'Pay Bills':
                await this.payBills.click()
                break
            case 'My Money App':
                await this.myMoneyApp.click()
                break
            case 'Online Statements':
                await this.onlineStatemets.click()
                break
            default:
                throw new Error('This tab does not exist...')
        }


    }


}