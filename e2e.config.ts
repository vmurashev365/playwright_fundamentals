import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'test/e2e',
    use: {
        headless: false,
        viewport: {width: 2048, height: 1112}, 
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off'
    }, 

    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: { browserName: 'webkit'}
        }
    ]

}

export default config