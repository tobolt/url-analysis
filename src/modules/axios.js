const axios = require('axios')

async function getSiteData (url) {
  const request = await axios.get(url)
  const html = request.data

  return {
    html
  }
}

async function runStatistics (url) {
  const startJSDOM = new Date()
  const data = await getSiteData(url)
  const stopJSDOM = new Date()

  // total words
  const words = data.html.split(' ').length

  // execution time
  const executionTime = (stopJSDOM - startJSDOM) / 1000

  return {
    words,
    executionTime
  }
}

module.exports = { getSiteData, runStatistics }
