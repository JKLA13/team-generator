//import/include packages needed for app
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./utils/generateHtml");
const path = require("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

//create function for team questions?? wrap initial manager questions with subclass questions?
function myTeam() {
  //prompt user to build team
  console.log("Please build your team.");
  //create array of questions for user input

  const initQuestions = [
    {
      type: "input",
      message: "What is your managers name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your managers id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your managers email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your managers office number?",
      name: "officeNumber",
    },
  ];
  console.log(initQuestions);
  //new function to add team members???

  // function teamMembers() {
  //     {
  //         //option to add team members

  //     }
  // }

  //create function to write HTML file

  // function writeToFile(fileName, data) {
  //   return fs.writeFileSync(path.join(fileName), data;
  // }

  //create a function to iitialize app
  //present use with questions

  // function initQuestions() {
  //     inquirer.prompt(initQuestions).then((data) => {
  //         writeToFile(".//dist/team.html"), generateHtml({...data});
  //         console.log("Your team.html Page has been generated!")
  //     })
  // }

  //function call to initialize app

  // init();
}
