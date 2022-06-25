const playwright = require('../src/modules/playwright')

test('html', async () => {
  const { html } = await playwright.getSiteData('https://bolster.ai')

  expect(typeof html).toBe('string')
})

test('statistics', async () => {
  const { words, executionTime } = await playwright.runStatistics('https://bolster.ai')

  expect(typeof words).toBe('number')
  expect(typeof executionTime).toBe('number')
})
