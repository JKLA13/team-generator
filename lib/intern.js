//import class js
const Employee = require("./lib/employee");

// build sub class for intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  //need method to collect info from object
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

//export for other js files to import
module.exports = Intern;
