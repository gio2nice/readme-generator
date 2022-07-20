// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
  ## Description
  ${data.description}

  
  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Github](#github)
  

  ## Installation
  The following necessary dependencies must be installed in order to run the application 
  
      ${data.installation}
  

  ## Usage
  In order to use this app:
  - ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  - ${data.contributed}

  ## Tests
  To run tests, run the following command:
  
      ${data.tests}
  

  ## Questions
  If you have any questions about the repo, contact me directly at ${data.email}. You can find more of my work at ${data.github}

`;
}

module.exports = generateMarkdown;
