const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCard = employee => {
    var otherInfo;
    if (employee.getRole() === 'Manager') {
        otherInfo = 'Office number: ' + employee.getOfficeNumber();
    } else if (employee.getRole() === 'Engineer') {
        var githubLink = 'https://github.com/' + employee.getGithub();
        otherInfo = 'GitHub: <a href="' + githubLink + '" target="_blank">' + employee.getGithub() + '</a>';
    } else {
        otherInfo = 'School: ' + employee.getSchool();
    }

    return `
        <section class='card'>
            <div class='card-header'>
                <h2>${employee.getName()}</h2>
                <h3>${employee.getRole()}</h3>
            </div>
            <div class='card-body'>
                <p>ID: ${employee.getId()}</p>
                <p>Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
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

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel='stylesheet' href='style.css'>
        <title>Team Profile</title>
    </head>

    <body>

        <header>
            <h1 class='text-center'>My Team</h1>
        </header>

        <main>
            ${generateCard(manager)}
            ${generateCardsFromArray(employeeArr)}
        </main>

    </body>
    </html>
    `
}