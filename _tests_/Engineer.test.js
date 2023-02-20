const Engineer = require('../lib/Engineer');

test('Creates a new Engineer', () => {
    const engineer = new Engineer('Jimbo', '58', 'jimbo@gmail.com', 'jimbo219');

    expect(engineer.name).toBe('Jimbo');
    expect(engineer.id).toBe(expect.any(Number));
    expect(engineer.email).toBe(expect.any(String));
    expect(engineer.github).toBe(expect.any(String));
});

test('Checks all Engineer methods', () => {
    const engineer = new Engineer('Jimbo', '58', 'jimbo@gmail.com', 'jimbo219');

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe('Engineer');
});


