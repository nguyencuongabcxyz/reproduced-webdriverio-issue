import { remote } from 'webdriverio'

const browser = await remote({
  logLevel: 'trace',
  outputDir: '/results',
    capabilities: {
        browserName: 'chrome',
        browserVersion: '120.0.6099.109',
        'goog:chromeOptions': {
          args: [
            '--no-sandbox',
            '--headless',
            '--disable-gpu',
            'window-size=1200,900',
            '--disable-dev-shm-usage',
          ],
        },
    }
})

await browser.url('https://webdriver.io/');