//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case 'Apache 2.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'BSD 2-Clause':
			badge = `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
			break;
		case 'BSD 3-Clause':
			badge = `![License](https://img.shields.io/badge/License-BSD%302--Clause-orange.svg)`;
			break;
		case 'LGPL-3.0':
			badge = `![License](https://img.shields.io/badge/License-lgpl_3_0--Clause-blue.svg)`;
			break;
		case 'MIT':
			badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
			break;
		case 'Mozilla Public 2.0':
			badge = `![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
			break;
		case 'CDDL-1.0':
			badge = `![License](https://img.shields.io/badge/License-CDOL_1_0-blue.svg)`;
			break;
		case 'EPL-2.0':
			badge = `![License](https://img.shields.io/badge/License-EPL_2_0-blue.svg)`;
			break;
		default:
			badge = '';
			break;
	};
	return badge;
};

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
		switch (license) {
			case 'Apache 2.0':
				url = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
				break;
			case 'BSD 2-Clause':
				url = `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
				break;
			case 'BSD 3-Clause':
				url = `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
				break;
			case 'LGPL-3.0':
				url = `[${license}](https://opensource.org/licenses/LGPL-3.0)`;
				break;
			case 'MIT':
				url = `Source link for [${license}](https://opensource.org/licenses/MIT)`;
				break;
			case 'Mozilla Public 2.0':
				url = `[${license}](https://opensource.org/licenses/MPL-2.0)`;
				break;
			case 'CDDL-1.0':
				url = `[${license}](https://opensource.org/licenses/CDDL-1.0)`;
				break;
			case 'EPL-2.0':
				url = `[${license}](https://opensource.org/licenses/EPL-2.0)`;
				break;
			default:
				url = ''
				break;
	}
	return url;
};

	// Create a function that returns the license section of README
	// If there is no license, return an empty string
	function renderLicenseSection(license) {
			if(!license) {
				return '';
			} else {
				return(
`## License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
`
				)
			};
	};

	//  Create a function to generate markdown for README
	function generateMarkdown(data) {
		return `
# ${data.title}
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
- [Contact](#contact)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
${data.questions}
## Contact
[GitHub Profile](https://github.com/${data.github})
[Email Me](${data.email})
`
};

module.exports = generateMarkdown;