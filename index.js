//  Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
// const Choices = require('inquirer/lib/objects/choices');

//  Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Provide a short description of the project',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What are the required steps to install the project?\n',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'How do you use this project?\n- Provide instructions and examples.\n',
	},
	{
		type: 'list',
		name: 'license',
		message: 'Which license do you want to use from the following:\n',
		choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'LGPL-3.0', 'MIT', 'Mozilla Public 2.0', 'CDDL-1.0', 'EPL-2.0'],
	},
	{
		type: 'input',
		name: 'contributors',
		message: 'Who contributed to this project?\n',
	},
	{
		type: 'input',
		name: 'tests',
		message: 'What are the test instructions for the project, if any?\n',
	},
	{
		type: 'input',
		name: 'questions',
		message: 'What questions do you want answered about the project?\nThink of this as being open-ended allowing users to help you out in the future.\n',
	},
	{
		type: 'input',
		name: 'github',
		message: 'What github do you want to use?\n- Make sure to spell it correctly!\n',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?\n',
	}
];

//  Create a function to write README file
function writeToFile(fileName, f) {
	fs.writeFile( fileName,	f, (error) => {
			error 
			? console.log(err) 
			: console.log('Check out your README!')
		})
};

// Create a function to initialize app
function init() {
	inquirer
	.prompt(questions)
	.then(res => {
		writeToFile('./output/README.md', generateMarkdown(res));
	});
};

// Function call to initialize app
init();
