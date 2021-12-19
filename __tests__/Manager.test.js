const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('Bob', 5, 'email', 10);

    expect(manager.name).toBe('Bob');
    expect(manager.id).toBe(5);
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe(10);
});

test('gets manager name', () => {
    const manager = new Manager('Bob', 5, 'email', 10);

    expect(manager.getName()).toBe('Bob');
});

test('gets manager ID', () => {
    const manager = new Manager('Bob', 5, 'email', 10);

    expect(manager.getId()).toBe(5);
});

test('gets manager email', () => {
    const manager = new Manager('Bob', 5, 'email', 10);

    expect(manager.getEmail()).toBe('email');
});

test('gets manager office number', () => {
    const manager = new Manager('Bob', 5, 'email', 10);

    expect(manager.getOfficeNumber()).toBe(10);
});

test('gets manager role', () => {
    const manager = new Manager('Bob', 5, 'email', 10);

    expect(manager.getRole()).toBe('Manager');
});