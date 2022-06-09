// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

Description: ${data.description}
Liscense: ${data.Liscense}
 ------------------------------

 ##Table of Contents

 1. [Installation](#installation)
 2. [Usage](#usage)
 3. [Tests](#tests)
 4. [Questions](#questions)
 5. [Credits](#credits)
 6. [Liscense](#liscense)

 ## Installation
How to install application:

 ${data.install}

 ## Usage

 ${data.usage}

## Tests
Instructions for testing:
${data.test}

## Questions

I can  be contacted at this email with any questions: ${data.contact}

My Github Username is: ${data.username}

 ## Credits
How to contribute: 

${data.credits}

## Liscense
Liscense used for this project:
${data.Liscense}

To learn more about liscences visit [https: //choosealicense.com/](https://choosealicense.com/).

`;
}

module.exports = generateMarkdown;
