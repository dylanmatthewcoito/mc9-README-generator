const fs = require('fs');
const inquirer = require('inquirer');

// Questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

// Function to generate the README content
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, please feel free to reach out:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
    writeToFile('README.md', readmeContent);
  });
}

// Initialize the application
init();