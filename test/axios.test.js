const axios = require('../src/modules/axios')

test('html', async () => {
  const { html } = await axios.getSiteData('https://bolster.ai')

  expect(typeof html).toBe('string')
})

test('statistics', async () => {
  const { words, executionTime } = await axios.runStatistics('https://bolster.ai')

  expect(typeof words).toBe('number')
  expect(typeof executionTime).toBe('number')
})
