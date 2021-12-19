const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCard = employee => {
    var otherInfo;
    if (employee.getRole() === 'Manager') {
        otherInfo = 'Office number: ' + employee.getOfficeNumber();
    } else if (employee.getRole() === 'Engineer') {
        otherInfo = 'GitHub: ' + employee.getGithub();
    } else {
        otherInfo = 'School: ' + employee.getSchool();
    }

    return `
        <section>
            <div>
                <h1>${employee.getName()}</h1>
                <h2>${employee.getRole()}</h2>
            </div>
            <div>
                <p>ID: ${employee.getId()}</p>
                <p>Email: ${employee.getEmail()}</p>
                <p>${otherInfo}</p>
            </div>
        </section>
    `
}

const generateCardsFromArray = arr => {
    var cardHtml = ``;
    for (var i = 0; i < arr.length; i++) {
        cardHtml += generateCard(arr[i]);
    }
    console.log(cardHtml);
    return cardHtml;
}

module.exports = answers => {
    const employeeArr = [];
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    for (var i = 0; i < answers.employees.length; i++) {
        if (answers.employees[i].addEmployee === 'Engineer') {
            const engineer = new Engineer(answers.employees[i].employeeName, answers.employees[i].employeeId, answers.employees[i].employeeEmail, answers.employees[i].employeeGithub);
            employeeArr.push(engineer);
        } else {
            const intern = new Intern(answers.employees[i].employeeName, answers.employees[i].employeeId, answers.employees[i].employeeEmail, answers.employees[i].employeeSchool);
            employeeArr.push(intern);
        }
    }
    console.log(employeeArr);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>

    <body>

        ${generateCard(manager)}
        ${generateCardsFromArray(employeeArr)}

    </body>
    </html>
    `
}