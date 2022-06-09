// TODO: Include packages needed for this application
let inquirer = require("inquirer");
let fs = require("fs");
let generatereadme = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
let questions = [

{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'project',
},

{
    type: 'input',
    message: "Tell us about your project, what is it for and how is it used?",
    name: 'description'
},

{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'install',
},

{
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
},

{
    type: 'input',
    message: 'How can other contribute to this repo?',
    name: 'credits',
},

{ type: 'input',
  message: 'What is your email?',
  name: 'contact',
},

{ type: 'input',
  message: 'how do you run your tests?',
  name: 'test'
},

{ type:'input',
  message: 'What is your Github username?',
  name: 'username'
},

{   type:'list',
    message: 'Which license will your project use?',
    name: 'Liscense',
    choices: ['Apache 2.0', 'GNU', 'ISC', 'MIT', 'No Liscense'],
}
    ];


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`generatedtest.md`, data, err => {
        if (err) {
            throw err
        };
        console.log("Success - Readme generated!")
    }); 
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(response){
        console.log(response);
        let content = generatereadme(response);
        writeToFile(content)
    });
    }

// Function call to initialize app
init();
