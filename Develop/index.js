// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

questions[0] = 'Enter project input here: ';
questions[1] = 'Enter desciption: ';
questions[2] = 'Enter your installation instructions: ';
questions[3] = 'Enter your usage information: ';
questions[4] = 'Enter your contribution guidelines: ';
questions[5] = 'Enter your test instructions: ';
questions[6] = 'Choose a license from below'; //Give options
questions[7] = 'Enter GitHub username: ';
questions[8] = 'Enter email address: ';
//Create a table of contents with links to connect to where there are

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //from the lesson
    fs.writeFile(fileName, generatePage(data), err => {
        if (err) throw err;
      
        console.log('Portfolio complete! Check out index.html to see the output!');
    });
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
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'description',
            message:questions[1],
            validate: inputDescription => {
                if (inputDescription) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'installation_instructions',
            message:questions[2],
            validate: inputInsInstructions => {
                if (inputInsInstructions) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'usage_information',
            message:questions[3],
            validate: inputUsageInfo => {
                if (inputUsageInfo) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'contribution_guidelines',
            message:questions[4],
            validate: inputContGuidelines => {
                if (inputContGuidelines) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        
        {
            type:'input',
            name: 'test_instructions',
            message:questions[5],
            validate: inputTestInstr => {
                if (inputTestInstr) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        {
            type:'list',
            name: 'license',
            message:questions[6],
            choices: ['MIT','IBM','ISC','Mozilla']
        },
        {
            type: 'input',
            name: 'github',
            message:questions[7],
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:questions[8],
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log('Please enter the a valid entry to continue');
                    return false;
                }
            }
        }
    ])
    
};

// Function call to initialize app
init().then(result => writeToFile('README.md',result)); 

