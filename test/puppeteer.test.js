const puppeteer = require('../src/lib/puppeteer')

test('html', async () => {
  const { html } = await puppeteer.getSiteData('https://bolster.ai')

  expect(typeof html).toBe('string')
})
