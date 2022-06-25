const puppeteer = require('../src/modules/puppeteer')

test('html', async () => {
  const { html } = await puppeteer.getSiteData('https://bolster.ai')

  expect(typeof html).toBe('string')
})

test('statistics', async () => {
  const { words, executionTime } = await puppeteer.runStatistics('https://bolster.ai')

  expect(typeof words).toBe('number')
  expect(typeof executionTime).toBe('number')
})
