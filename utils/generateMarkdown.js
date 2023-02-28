// function to generate markdown for README
function generateMarkdown(data) {

  let badgeIcon;

  if (data.projectLicense == 'MIT'){
    badgeIcon = 'https://img.shields.io/badge/license-MIT-green';
  }
  else if(data.projectLicense == 'APACHE'){
    badgeIcon = 'https://img.shields.io/badge/license-APACHE-green';    
  }
  else if(data.projectLicense == 'GPL'){
    badgeIcon = 'https://img.shields.io/badge/license-GPL-green';
  }
  else{
    badgeIcon = 'https://img.shields.io/badge/license-none-blue';
  }

  return `# ${data.projectName} ![licencse](${badgeIcon})

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
  Email: ${data.projectEmail}
  
  GitHub: https://github.com/${data.projectGITHUB}/
`;
}

module.exports = generateMarkdown;
