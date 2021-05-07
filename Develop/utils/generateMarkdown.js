module.exports = generateMarkdown;

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
  return `

  # ${data.title} 

  ## Descriptioin
  ${data.description}

  ## Table of Content
  * [installation instructions](#installation-instructions)
  * [usage information](#usage-information)
  * [contribution-guidelines](#contribution-guidelines)
  * [test instructions](#test-instructions)
  * [license](#license)
  * [github](#github)
  * [email](#email)

  ## #installation instructions
  ${data.installation_instructions}
  
  ## #usage information
  ${data.usage_information}
  
  ## #contribution guidelines
  ${data.contribution_guidelines}
  
  ## #test instructions
  ${data.test_instructions}
  
  ## #license
  ${data.license}

  ## Questions
  #### If you need reach me for further questions
  
  ### #github link: [https://github.com/${data.github}]
  
  ### #email address: ${data.email}
  `;
}

//module.exports = generateMarkdown;
