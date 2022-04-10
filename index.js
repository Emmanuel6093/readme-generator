const fs = require('fs');

const inquirer = require('inquirer');

 function generateReadMe(data) {
     return `# ${data.title}`;
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
            choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
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
    ]);
};

function writeReadMe(input) {
    var ReadMeText = `# ${input.title}
        ##Table of Contents
        [Description](#description)
        [Installation](#installation)
        [Usage](#usage)
        [License](#license)
        [Contributing](#contributing)
        [Testing](#testing)
        [Questions](#questions)
        ## Description
        ${input.description}
        ## Installation
        ${input.installation}
        ## Usage
        ${input.usage}
        ## License 
        ${input.license}
        ## Contributing 
        ${input.contributions}
        ## Testing 
        ${input.test}
        ## Questions
        ${input.github}
        ${input.email}
    `
    fs.writeFile('./readme.md', ReadMeText, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

function init() {
    inquirer.prompt(promptUser)
    .then((answers) => {
        writeReadMe(answers)
    })
}

init();