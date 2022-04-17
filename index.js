const fs = require('fs');

const inquirer = require('inquirer');

function generateMarkDown(data) {
    return `# ${data.title}`;
}

// prompt user questions
const questions = [{
        
            type: 'input',
            name: 'title',
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
            name: 'description', 
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
            name: 'contributing', 
            message: 'Explain how could other users contribute to your project (optional):'
        }, 
        {
            type: 'input', 
            name: 'testing', 
            message: 'Provide tests for project and explain how to test (optional)'
        }, 
        {
            type: 'list', 
            name: 'license', 
            message: 'Please select which license you would like to use:',
            choices: ["MIT", "Apache", "GNU GPLv3"], 
        },
        {
            type: 'input',
            name: 'questions',
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
        }, 
    ];
 

function fileGenerator(input) {
    var readMeText = `
    # ${input.title}
        
    ##Table of Contents
        1. [Description](#description)
        2. [Installation](#installation)
        3. [Usage](#usage)
        4. [License](#license)
        5. [Contributing](#contributing)
        6. [Testing](#testing)
        7. [Questions](#questions)
        
        ## Description
        ${input.description}
       
        ## Installation
        ${input.installation}
        
        ## Usage
        ${input.usage}
       
        ## License 
        ${input.license}
        
        ## Contributing 
        ${input.contributing}
        
        ## Testing 
        ${input.testing}
        
        ## Questions
        If you have any question, email me at ${input.email} or check out repos <https://github.com/${input.github}>GitHub</https:>.
    `
    
    fs.writeFile('./readme.md', readMeText, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

function init() {
    inquirer.prompt(questions) 
        .then((answers) => {
            fileGenerator(answers)
        })
}

init();
