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

module.exports = { getSiteData }
