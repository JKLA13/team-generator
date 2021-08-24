//import/include packages needed for app
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./utils/generateHtml");
const path = require("path");

//create array of questions for user input

const questions = [];

//create function to write HTML file

// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(fileName), data);
// }

//create a function to iitialize app
//present use with questions

// function init() {
//     inquirer.prompt(questions).then((data) => {
//         writeToFile("./employee.html"), generateHtml({...data});
//         console.log("Your Employee.html Page has been generated!")
//     })
// }

//function call to initialize app

// init();
