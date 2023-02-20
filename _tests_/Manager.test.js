const Manager = require("../lib/Manager");

test("Creates a new Manager", () => {
    const manager = new Manager("Jimbo", "58", "jimbo@gmail.com", "21");

    expect(manager.name).toBe("Jimbo");
    expect(manager.id).toBe(expect.any(Number));
    expect(manager.email).toBe(expect.any(String));
    expect(manager.officeNumber).toBe(expect.any(String));
});

test("Checks all Manager methods", () => {
    const manager = new Manager("Jimbo", "58", "jimbo@gmail.com", "21");

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe("Manager");
});


