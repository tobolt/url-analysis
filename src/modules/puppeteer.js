const puppeteer = require('puppeteer')

async function getSiteData (url) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const html = await page.evaluate(() => document.body.outerHTML)
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
