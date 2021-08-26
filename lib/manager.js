//import class js
const Employee = require("./employee");

// build sub class for intern
class Manager extends Employee {
  constructor(name, id, email, OfficeNumber) {
    super(name, id, email);
    this.OfficeNumber = OfficeNumber;
  }
  //need method to collect info from objects
  getOfficeNumber() {
    return this.OfficeNumber;
  }
  getRole() {
    return "Manager";
  }
}
//export js file to import to other js files
module.exports = Manager;
