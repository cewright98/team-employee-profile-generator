const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
const generatePage = require('./src/page-template');

const questions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is your team manager's name?",
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter your team manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is your team manager's employee ID?",
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log("Please enter your team manager's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your team manager's email address?",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter your team manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is your team manager's office number?",
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log("Please enter your team manager's office number!");
                return false;
            }
        }
    },
    {
        type: 'loop',
        name: 'employees',
        message: 'Add another employee?',
        questions: [
            {
                type: 'list',
                name: 'addEmployee',
                message: "What type of employee would you like to add?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'employeeName',
                message: "What is your employee's name?",
                validate: employeeNameInput => {
                    if (employeeNameInput) {
                        return true;
                    } else {
                        console.log("Please enter your employee's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is your employee's ID?",
                validate: employeeIdInput => {
                    if (employeeIdInput) {
                        return true;
                    } else {
                        console.log("Please enter your employee's employee ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: "What is your employee's email address?",
                validate: employeeEmailInput => {
                    if (employeeEmailInput) {
                        return true;
                    } else {
                        console.log("Please enter your employee's email address!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeGithub',
                message: "What is your employee's GitHub username?",
                when(answers) {
                    return answers.addEmployee === 'Engineer';
                },
                validate: employeeGithubInput => {
                    if (employeeGithubInput) {
                        return true;
                    } else {
                        console.log("Please enter your employee's GitHub username!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeSchool',
                message: "What is your intern's school?",
                when(answers) {
                    return answers.addEmployee === 'Intern';
                },
                validate: employeeSchoolInput => {
                    if (employeeSchoolInput) {
                        return true;
                    } else {
                        console.log("Please enter your intern's school!");
                        return false;
                    }
                }
            }
        ]
    }
]

inquirer
    .prompt(questions)
    .then(answers => {
        fs.writeFile('./dist/index.html', generatePage(answers), err => {
            if (err) {
                reject(err);
                return;
            }
        });
    });