const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("Can grab github account from constructor", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Hal", 13, "hal@gmail.com", testValue);
    expect(engineer.github).toBe(testValue);
  });
});

describe("Engineer", () => {
  it('Can grab role from "Engineer"', () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Hal", 13, "hal@gmail.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testValue);
  });
});

describe("Engineer", () => {
  it("Can grab GitHub username from getHubUser", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Hal", 13, "hal@gmail.com", "GitHubUser");
    expect(engineer.getGithub()).toBe(testValue);
  });
});
