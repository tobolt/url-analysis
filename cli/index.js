module.exports = [
  {
    type: 'input',
    name: 'url',
    message: 'Enter URL'
  },
  {
    type: 'list',
    choices: [{
      name: 'Playwright',
      value: 'playwright'
    }, {
      name: 'Puppeteer',
      value: 'puppeteer'
    }],
    name: 'module',
    message: 'Choose Module'
  },
  {
    type: 'list',
    choices: [{
      name: 'Run Statistics',
      value: 'runStatistics'
    }, {
      name: 'Get Site Data',
      value: 'getSiteData'
    }],
    name: 'activity',
    message: 'Choose Activity'
  }
]
