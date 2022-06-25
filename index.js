var inquirer = require('inquirer');
inquirer
    .prompt([{
        type: 'input',
        name: 'url',
        message: 'Enter URL'
    }, {
        type: 'list',
        choices: ['Playwright', 'Puppeteer'],
        name: 'lib',
        message: 'Choose Library'
    }]).then((answers) => {

        console.log(answers)
    
    }).catch((error) => {
        if (error.isTtyError) {
        console.log('Prompt couldn\'t be rendered in the current environment')
        } else {
        console.log('Something went wrong!')
        }
    });
