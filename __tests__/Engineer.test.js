const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Bob', 5, 'email', 'github');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe(5);
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});

test('gets engineer name', () => {
    const engineer = new Engineer('Bob', 5, 'email', 'github');

    expect(engineer.getName()).toBe('Bob');
});

test('gets engineer ID', () => {
    const engineer = new Engineer('Bob', 5, 'email', 'github');

    expect(engineer.getId()).toBe(5);
});

test('gets engineer email', () => {
    const engineer = new Engineer('Bob', 5, 'email', 'github');

    expect(engineer.getEmail()).toBe('email');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Bob', 5, 'email', 'github');

    expect(engineer.getGithub()).toBe('github');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Bob', 5, 'email', 'github');

    expect(engineer.getRole()).toBe('Engineer');
});