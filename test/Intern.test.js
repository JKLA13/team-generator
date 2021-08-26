const Intern = require("../lib/intern");

describe("Intern", () => {
  it("Can grab school from constructor", () => {
    const testValue = "DU";
    const intern = new Intern("Hal", 13, "hal@gmail.com", testValue);
    expect(intern.school).toBe(testValue);
  });
});

describe("Intern", () => {
  it('Can grab role from "Intern"', () => {
    const testValue = "Intern";
    const intern = new Intern("Hal", 13, "hal@gmail.com", "DU");
    expect(intern.getRole()).toBe(testValue);
  });
});

describe("Intern", () => {
  it("Can grab school from getSchool()", () => {
    const testValue = "DU";
    const intern = new Intern("Hal", 13, "hal@gmail.com", testValue);
    expect(intern.getGithub()).toBe(testValue);
  });
});
