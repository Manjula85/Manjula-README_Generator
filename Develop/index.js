// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

questions[0] = 'Enter project title here: ';
questions[1] = 'Enter desciption: ';
questions[2] = 'Installation instructions: ';
questions[3] = 'Usage information: ';
questions[4] = 'Contribution guidelines: ';
questions[5] = 'Test instructions: ';
questions[6] = 'Choose a license from below'; //Give options
questions[7] = 'Enter GitHub username: ';
questions[8] = 'Enter email address: ';
//Create a table of contents with links to connect to where there are

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown();
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if (titleInput) {
                    return false;
                } else {
                    console.log('Please enter the title');
                    return false;
                }
            }
        }
    ])
    .then(test => console.log(test));
};

// Function call to initialize app
init(); 
