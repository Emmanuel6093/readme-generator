const fs = require('fs');

const inquirer = require('inquirer');

// generates a markdown for readme 
function generateMarkDown(data) {
    return `# ${data.title}`;
}

// generates a badge if license is being used and if not it returns blank 
renderLicenseBadge = license => {
    if (!license) {
      return '';
    };
    
    return `
    <img src="https://img.shields.io/badge/license-${license}-blue" alt="badge"></img>
    `;
  };
  
  // generates link to website of license if a license is confirmed being used in project 
  renderLicenseLink = license => {
  if (license == 'MIT'){
    return `
    <a href=https://github.com/microsoft/vscode/blob/main/LICENSE.txt>${license}</a>
    `;
  } else if (license == 'Apache'){
    return `
    <a href=https://www.apache.org/licenses/LICENSE-2.0>${license}</a>
    `;
  } else {
    return `
    <a href=https://choosealicense.com/licenses/gpl-3.0/>${license}</a>
    `;
  };
  };
  
  // generates text section stating which license is being used and calls a function to create a link to that license's website. If no license, returns blank
  renderLicenseSection = license => {
    if (!license) {
      return '';
    };
  
    return `
    ## License
    This project is licensed under the ${renderLicenseLink(license)} license.
    `;
  };



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
            choices: ["MIT", "Apache", "GNU GPLv3"]
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
        }, 
    ];
 
// function to create the readme file 
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
        If you have any questions, email me at ${input.email} or check out my repos on GitHub ${input.github}.
    `
    // write file for readme 
    fs.writeFile('./readme.md', readMeText, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}

// function to initialize 
function init() {
    inquirer.prompt(questions) 
        .then((answers) => {
            fileGenerator(answers)
        })
}

init();
