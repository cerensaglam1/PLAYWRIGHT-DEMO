// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  retries: 2,
  use: {
    baseURL: 'https://www.zara.com/us/en/',   // change if your locale differs
    headless: false,                           // show the window; override with --headed/--headless if you like
    trace: 'retain-on-failure',
    screenshot: "only-on-failure",
    video: "retain-on-failure",
        //trace: "on" // maximize (Chromium headed)
    
  
  },
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',                     // use installed Google Chrome
        viewport: null,                        // let OS window size control the viewport
        launchOptions: { args: ['--start-maximized'] },
        
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'test-results/html' }],
  ],
});

