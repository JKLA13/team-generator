const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager", () => {
  it("Can grab office number from constructor", () => {
    const testValue = "500";
    const manager = new Manager("Hal", 13, "hal@gmail.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
  });
});

describe("Manager", () => {
  it('Can grab role from "Manager"', () => {
    const testValue = "Manager";
    const manager = new Manager("Hal", 13, "hal@gmail.com", 500);
    expect(manager.getRole()).toBe(testValue);
  });
});

describe("Manager", () => {
  it("Can grab office number from getOffice()", () => {
    const testValue = "500";
    const manager = new Manager("Hal", 13, "hal@gmail.com", testValue);
    expect(manager.getOfficeNumber()).toBe(testValue);
  });
});
