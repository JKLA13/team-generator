// build class for employees
//figure out properties shared by all employees to pass to subclasses
class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.email = email;
    this.name = name;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
