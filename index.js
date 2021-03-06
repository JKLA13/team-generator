//import/include packages needed for app
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const path = require("path");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");
const render = require("./src/generateHtml");
const jest = require("jest");

const teamArr = [];

const DIST_DIR = path.resolve(__dirname, "./dist");
const outPath = path.join(DIST_DIR, "team.html");

// // create a function to iitialize app
// // present user with questions
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

  //function to add team members

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
      //.then & switch to return employee selection
      .then((answers) => {
        switch (answers.employee) {
          case "Engineer":
            engineerQuestions();
            break;
          case "Intern":
            internQuestions();
            break;
          default:
            console.log("Team has been created!");
            createTeam();
        }
      });
  }
  // function for engineer questions
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
          answers.id,
          answers.email,
          answers.github
        );
        teamArr.push(engineer);
        addMembers();
      });
  }

  //function for intern questions

  function internQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your intern's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your intern's id number?",
          name: "id",
        },
        {
          type: "input",
          message: "What is your intern's email?",
          name: "email",
        },
        {
          type: "input",
          message: "What is your intern's school?",
          name: "school",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamArr.push(intern);
        addMembers();
      });
  }
  //function to create team
  function createTeam(generateHtml) {
    fs.writeFileSync(outPath, render(teamArr), "utf-8", () => {});
  }

  //function to initialize app

  initQuestions();
}
myTeam();
