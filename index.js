const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const Userquestions = () =>
    //Prompts the user for inputs using inquirer
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
            choices: ['MIT', 'APACHE', 'GPL', 'None']
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
            name: 'projectEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'projectGITHUB',
            message: 'What is your github username?'
        }
    //After prompts are gotten a function is used with the answers to generatate the markdown file takes the file path and markdown generation return as parameters
    ]).then(function(answer){
        writeToFile('testREADME/testREADME.md', generateMarkdown(answer));
    });
    

// function to write README file
function writeToFile(fileName, data) {
    //Writes the file and will error if there is a problem, prints success to know it is written
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
