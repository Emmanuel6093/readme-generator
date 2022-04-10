const fs = require('fs');

const inquirer = require('inquirer');

const generateReadMe = (data) => {
    return 
}

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            
            // project name required
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'about', 
            message: 'Please provide some information about your project:'
        }, 
        {
            type: 'input', 
            name: 'installation', 
            message: 'Explain how a user would install the application (optional):'
        }, 
        {
            type: 'input', 
            name: 'usage', 
            message: 'Explain the purpose of your application and how and it would be used (Required)', 
           
            // usage required
            validate: appUsageInput => {
                if (appUsageInput) {
                    return true;
                } else {
                    console.log('Please explain usage!')
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'contribution', 
            message: 'Explain how could other users contribute to your project (optional):'
        }, 
        {
            type: 'input', 
            name: 'tests', 
            message: 'Provide tests for project and explain how to test (optional)'
        }, 
        {
            type: 'checkbox', 
            name: 'licenses', 
            choices: ['']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (Required)', 
            
            // GitHub Username required
            validate: gitHubUser => {
                if (gitHubUser) {
                    return true; 
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'email', 
            message: 'What is your email?'
        }
    ])
}