const playwright = require('playwright')

async function getSiteData (url) {
  const browser = await playwright.chromium.launch({
    headless: true
  })

  const page = await browser.newPage()
  await page.goto(url)
  const html = await page.content()

  browser.close()

  return {
    html
  }
}

async function runStatistics (url) {
  const startPlaywright = new Date()
  const data = await getSiteData(url)
  const stopPlaywright = new Date()

  // total words
  const words = data.html.split(' ').length

  // execution time
  const executionTime = (stopPlaywright - startPlaywright) / 1000

  return {
    words,
    executionTime
  }
}

module.exports = { getSiteData, runStatistics }
