// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description
  ${data.projectDescription}

  ## Installation
  ${data.projectInstallation}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)

  ## Usage
  ${data.projectUsage}

  ## License
  ${data.projectLicense}

  ## Contributors
  ${data.projectContributors}

  ## Testing
  ${data.projectTests}

  ## Questions
  ${data.projectQuestions}
`;
}

module.exports = generateMarkdown;
