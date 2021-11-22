
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const inquire = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    { type: "input",
     name: "title",
     message: "What is your project title?"
},
    {
    type: "input",
    name: "packages",
    message: "What packages will you use in the project?"
},
    {
    type: "input",
    name: "email",
    message: "What is your e-mail address?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {   
    fs.writeFile(fileName, data, err => {
   err ? console.error(err) : console.log('success')})  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        let myMarkDown =  generateMarkdown(answers) 
         console.log(myMarkDown)
         writeToFile("readMe.md", myMarkDown)
    });
}

// Function call to initialize app
init();
