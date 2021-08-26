const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Can create employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
});

describe("Employee", () => {
  it("Can take name from constructor arguement", () => {
    const name = "Hal";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
});

describe("Employee", () => {
  it("Can take id from constructor arguement", () => {
    const testId = 13;
    const employee = new Employee(testId);
    expect(employee.id).toBe(testId);
  });
});

describe("Employee", () => {
  it("Can take email from constructor arguement", () => {
    const testEmail = "hal@gmail.com";
    const employee = new Employee(testEmail);
    expect(employee.email).toBe(testEmail);
  });
});

describe("Employee", () => {
  it("Can take name from getName()", () => {
    const testGetName = "Hal";
    const employee = new Employee(testGetName);
    expect(employee.getName()).toBe(testGetName);
  });
});

describe("Employee", () => {
  it("Can take id from getId()", () => {
    const testGetId = 13;
    const employee = new Employee(testGetId);
    expect(employee.getId()).toBe(testGetId);
  });
});

describe("Employee", () => {
  it("Can take email from getEmail()", () => {
    const testGetEmail = "hal@gmail.com";
    const employee = new Employee(testGetEmail);
    expect(employee.getEmail()).toBe(testGetEmail);
  });
});

describe("Employee", () => {
  it('Can take role from "Employee"', () => {
    const testGetRole = "Employee";
    const employee = new Employee("Hal", 13, "hal@gmail.com");
    expect(employee.getRole()).toBe(testGetRole);
  });
});
