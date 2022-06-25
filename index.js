const inquirer = require('inquirer')
const modules = require('./src')
const choices = require('./cli')

inquirer
  .prompt(choices).then(async (answers) => {
    const stats = await modules[answers.module][answers.activity](answers.url)
    console.log(stats)
  }).catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt couldn\'t be rendered in the current environment')
    } else {
      console.log('Something went wrong!')
      console.log(error)
    }
  })
