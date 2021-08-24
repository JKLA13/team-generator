//import/include packages needed for app
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./utils/generateHtml");
const path = require("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

const teamArr = [];
//create function for team questions?? wrap initial manager questions with subclass questions?
function myTeam() {
  //prompt user to build team
  console.log("Please build your team.");
  //create array of questions for user input

  function initQuestions() {
    inquirer
      .prompt([
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
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamArr.push(manager);
        addMembers();
      });
  }

  //new function to add team members

  function addMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Which type of team member would you like to add?",
          name: "employee",
          choices: ["Engineer", "Intern", "I'm done adding team members."],
        },
      ])
      .then((answers) => {
        switch (answers.Employee) {
          case "Engineer":
            engineerQuestions();
            break;
          case "Intern":
            internQuestions();
            break;
          default:
            createTeam();
        }
      });
    //option to add team members
  }
  // need function for engineer questions
  function engineerQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your engineer's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your engineer's id number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your engineer's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is your engineer's github?",
          name: "github",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.email,
          answers.id,
          answers.github
        );
        teamArr.push(engineer);
        addMembers();
      });
  }

  //need function for intern questions

  function internQuestions() {}

  function createTeam() {}
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

  initQuestions();
}
myTeam();
