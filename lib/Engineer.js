const Employee = require('./Employee');

// class constructor should use 'super' to get employee info, plus add github
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // add getRole() that returns Engineer, plus getGithub()
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;