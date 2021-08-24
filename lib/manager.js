//import class js
const Employee = require("./employee");

// build sub class for intern
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = this.officeNumber;
  }
  //need method to collect info from objects
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
//export js file to import to other js files
module.exports = Manager;
