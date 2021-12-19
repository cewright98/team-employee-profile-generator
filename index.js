const inquirer = require('inquirer');

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
        type: 'list',
        name: 'addEmployee',
        message: "Would you like to add an employee or finish building your team?",
        choices: ['Add Engineer', 'Add Intern', 'Finish building']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is your engineer's name?",
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log("Please enter your engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is your engineer's employee ID?",
        validate: engineerIdInput => {
            if (engineerIdInput) {
                return true;
            } else {
                console.log("Please enter your engineer's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email address?",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("Please enter your engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's GitHub username?",
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log("Please enter your engineer's GitHub username!");
                return false;
            }
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is your intern's name?",
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log("Please enter your intern's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is your intern's employee ID?",
        validate: internIdInput => {
            if (internIdInput) {
                return true;
            } else {
                console.log("Please enter your intern's employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email address?",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter your intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is your intern's school?",
        validate: internSchoolInput => {
            if (internSchoolInput) {
                return true;
            } else {
                console.log("Please enter your intern's school!");
                return false;
            }
        }
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        if (answers.addEmployee === 'Add Engineer') {
            inquirer.prompt(engineerQuestions);
        } else if (answers.addEmployee === 'Add Intern') {
            inquirer.prompt(internQuestions);
        } 
    });