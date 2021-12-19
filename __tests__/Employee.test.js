const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Bob', 5, 'email');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toBe(5);
    expect(employee.email).toBe('email');
});

test('gets employee name', () => {
    const employee = new Employee('Bob', 5, 'email');

    expect(employee.getName()).toBe('Bob');
});

test('gets employee ID', () => {
    const employee = new Employee('Bob', 5, 'email');

    expect(employee.getId()).toBe(5);
});

test('gets employee email', () => {
    const employee = new Employee('Bob', 5, 'email');

    expect(employee.getEmail()).toBe('email');
});

test('gets employee role', () => {
    const employee = new Employee('Bob', 5, 'email');

    expect(employee.getRole()).toBe('Employee');
});