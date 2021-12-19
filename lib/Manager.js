const Employee = require('./Employee');

// class constructor should use 'super' to get employee info, plus add officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // add getRole() that returns Manager
    getRole() {
        return 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;