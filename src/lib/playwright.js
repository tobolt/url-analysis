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

module.exports = { getSiteData }
