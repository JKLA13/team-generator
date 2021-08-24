//import class js
const Employee = require("./employee");

// build subclass for engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  //need method to collect info from object
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

//export module to import into other js files
module.exports = Engineer;
