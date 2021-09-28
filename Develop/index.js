// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatemarkdown = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, {
    type: "input",
    message: "How would you describe this project?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What do you need to install in order to run this app?",
    name: "Installation"
}, {
    type: "input",
    message: "How do I use the app? Where do I type commands?",
    name: "Usage"
}, {
    type: "list",
    message: "Which license do you want to use?",
    name: "License",
    Choices: [
        'MIT', 'Apache', 'none'
    ]
}, {
    type: "input",
    message: "Enter contributing guidelines",
    name: "Contributing"
}, {
    type: "input",
    message: "what command to entertest this app?",
    name: "Tests"
},{
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},{
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username'
},

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=> {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatemarkdown(data));
        console.log(data)
    })
    //.then(function(data) {
     //   writeToFile("README.md", generatemarkdown(data));
      //  console.log(data)

    //})
}

// Function call to initialize app
init();
