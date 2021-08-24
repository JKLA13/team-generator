//import class js
const Employee = require("./lib/employee");

// build subclass for engineer
class Engineer extends Employee {
  constructor(name, id, email) {
    super(gitUser);
    this.gitUser = gitUser;
  }
  //need method to collect info from object
  getgitUser() {
    return this.gitUser;
  }
  getRole() {
    return "Engineer";
  }
}

//export module to import into other js files
module.exports = engineer;
