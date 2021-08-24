// build class for employees
//figure out properties shared by all employees to pass to subclasses
// const Employee = new Employee();
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

  getId() {
    return this.id;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
