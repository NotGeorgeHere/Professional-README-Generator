const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const Userquestions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the title for your project?',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Description of project:'
        },
        {
            type: 'input',
            name: 'projectInstallation',
            message: 'Project Installation',
            default: 'node ./index.js'
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Usage for project?'
        },
        {
            type: 'list',
            name: 'projectLicense',
            message: 'Licences used?',
            choices: ['MIT', 'APACHE', 'The Unlicense', 'None']
        },
        {
            type: 'input',
            name: 'projectContributors',
            message: 'Were there any contributors?',
            default: 'none'
        },
        {
            type: 'input',
            name: 'projectTests',
            message: 'What tests need to be done?',
            default: 'node ./index.js'
        },
        {
            type: 'input',
            name: 'projectQuestions',
            message: 'Questions?'
        }

    ]).then(function(answer){
        writeToFile('testREADME.md', generateMarkdown(answer));
    });
    

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    Userquestions()        
}

// function call to initialize program
init();
