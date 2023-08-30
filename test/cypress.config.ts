import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: '',
    viewportWidth: 1000,
    viewportHeight: 600,
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    video: false,
    includeShadowDom: false,
    retries: { "runMode": 0, "openMode": 0 },
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    execTimeout: 60000,
    taskTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    downloadsFolder: 'cypress/downloads',
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/report/mochawesome',
        charts: true,
        reportPageTitle: 'PBT Cypress Automation Report',
        embeddedScreenshots: true,
        inlineAssets: true, //Adds the asserts inline
        quite: true,
        overwrite: false,
        html: true,
        json: true
    },
    env: {
        db: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cypress_test',
        },
        FOO: 'bar',
    },
    e2e: {
        setupNodeEvents(on: any, config: any) {
            return require('./cypress/plugins/index.ts')(on, config)
        },
        defaultCommandTimeout: 10000,
        supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
        baseUrl: 'http://localhost:3000',
        specPattern: [
            'cypress/e2e/**/*.{js,jsx,ts,tsx}',
            'cypress/e2e/**/*.{spec,test,feature}.{js,jsx,ts,tsx}',
            'cypress/e2e/**/*.feature',
            //'cypress/e2e/home.test.ts'
        ],
        excludeSpecPattern: '*.hot-update.{js,ts}'
    }
})