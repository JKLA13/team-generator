// build class for employees
//figure out properties shared by all employees to pass to subclasses

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
  // need method for info above
  //example printInfo() {}
}

// pass any new arguements in ()
// const Employee = new Employee();

// Employee.printInfo();

//export module to import into other js files
// module.exports = employee;
