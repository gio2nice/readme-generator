// TODO: Include packages needed for this application
const inquirer = require("inquirer") 
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the project about? Give a detailed description of your project?"
    },
    {
        type: "input",
        name: "table of contents",
        message: "Table of Contents"
    },
    {
        type: "input",
        name: "installation",
        message: "What does the user need to install to run this app (ie...dependencies)?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this app? Give intructions"
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use?",
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A']
    },
    {
        type: "input",
        name: "contributed",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What commands are needed to test this app?"
    },
    {
        type: "input",
        name: "github",
        message: "GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    }
];


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)
        console.log(answers.email)
        var tamplet = generateMarkdown(answers)
        console.log(tamplet)
        fs.writeFile("README.md",tamplet, function(err){
            if(err){
                throw err 
            }
            console.log("Your README has succesfully been generated!")
        }) 
    }) 
}

// Function call to initialize app
init();
