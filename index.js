const inquirer = require("inquirer");
const fs = require("fs");

//function to import generate
 const generateMarkdown = require("./utils/generateMarkdown.js");


// function to write README file
function writeToFile(filename, data) {
  fs.writeFile (filename, data, (err) =>
  err ? console.error(err) : console.log('Success!')
  )};



// function to initialize program (this is at page load and ask teh questions)
function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage'
    },
    {
      type: 'list',
      message: 'What are the licenses being used?',
      name: 'license',
      choices: ['MIT', 'Apache', 'GPL'],
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What are the test instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your Github username',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'contact',
    },
  ]).then (function(answers){
    //write function that write to file using generate markdown
    const result = generateMarkdown(answers);
    writeToFile("./README.md", result)
    console.log(result)
  });
}

// function call to initialize program
init();


