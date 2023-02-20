const Employee = require("../lib/Employee");

test("Adds new employee", () => {
    const employee = new Employee("Jimbo", "58", "jimbo@gmail.com");
    expect(employee.name).toBe("Jimbo");
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

test(" Checks all employee methods", () => {
    const employee = new Employee("Jimbo", "58", "jimbo@gmail.com");
    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
});


