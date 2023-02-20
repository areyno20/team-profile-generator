const Intern = require('../lib/Intern');

test('Creates a new Intern', () => {
    const intern = new Intern('Jimbo', '58', 'jimbo@gmail.com', 'McGill University');

    expect(intern.name).toBe('Jimbo');
    expect(intern.id).toBe(expect.any(Number));
    expect(intern.email).toBe(expect.any(String));
    expect(intern.school).toBe(expect.any(String));
});

test('Checks all Intern methods', () => {
    const intern = new Intern('Jimbo', '58', 'jimbo@gmail.com', 'McGill University');

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');
});

