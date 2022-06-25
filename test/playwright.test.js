const playwright = require('../src/lib/playwright')

test('html', async () => {
  const { html } = await playwright.getSiteData('https://bolster.ai')

  expect(typeof html).toBe('string')
})
