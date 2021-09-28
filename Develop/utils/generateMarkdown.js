// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'none'){
  return `https://badgen.net/badge/license/${license}/blue`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license != 'none'){
  return '*[License](#license)'
}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'none'){
    return `##License ${data.License}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Description
  ${data.Description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(data.License)}
  *[Credits](#credits)
  *[Test](#test)
  *[Email](#email)
  *[GithubUsername](#github-username)
  
  ##Installation
  Here is what you need to run the appliction ${data.Installation}

  ##Usage
  To use the application you will need ${data.Usage}

  ${renderLicenseSection(data.License)}
  
  ##Credits
  Contributors: ${data.Contributing}

  ##Tests
  Here is the command need to run the test ${data.Tests}

  ##Email
  if have any question plz Email anytime ${data.Email}

  ##Github Username
  https://github.com/${data.Username}
`;
}

module.exports = generateMarkdown;
