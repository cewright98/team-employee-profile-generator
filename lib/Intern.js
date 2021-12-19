const Employee = require('./Employee');

// class constructor should use 'super' to get employee info, plus add school
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // add getRole() that returns Intern, plus getSchool()
    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;