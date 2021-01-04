function generateMarkdown(data) {
  return `
  
  # ${data.title} 
  [![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)](https://opensource.org/licenses/${data.license}-2.0)

  ## Description
  ${data.description}

  ## Table of Contents

  [Description](#Description)  
  [Installation](#Installation)  
  [Usage](#Usage)  
  [License](#License)  
  [Contributions](#Contributions)  
  [Test](#Test)  
  [Questions](#Questions)  



  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License

  This application is covered under the license ${data.license}.

  ## Contributions
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  Github Profile: [https://github.com/${data.username}](https://github.com/${data.username})
  
  If you have additional questions, You can reach me at: ${data.contact}

`}
module.exports = generateMarkdown;