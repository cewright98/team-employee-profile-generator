const Intern = require('../lib/Intern');

test('creates an manager object', () => {
    const intern = new Intern('Bob', 5, 'email', 'UNC');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe(5);
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('UNC');
});

test('gets intern name', () => {
    const intern = new Intern('Bob', 5, 'email', 'UNC');

    expect(intern.getName()).toBe('Bob');
});

test('gets intern ID', () => {
    const intern = new Intern('Bob', 5, 'email', 'UNC');

    expect(intern.getId()).toBe(5);
});

test('gets intern email', () => {
    const intern = new Intern('Bob', 5, 'email', 'UNC');

    expect(intern.getEmail()).toBe('email');
});

test('gets intern school', () => {
    const intern = new Intern('Bob', 5, 'email', 'UNC');

    expect(intern.getSchool()).toBe('UNC');
});

test('gets intern role', () => {
    const intern = new Intern('Bob', 5, 'email', 'UNC');

    expect(intern.getRole()).toBe('Intern');
});