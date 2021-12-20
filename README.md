# Professional Team Profile Generator 

## Description
A team profile generator that creates a file from the command line using user input from prompts.

## Installation
Once you have the code copied to your local files, simply run node index.js from the command line to begin the application.

## Usage
The primary function of this team profile generator is for managers or other employees to create a webpage with information about their professional team members. Once the application is run, the user is prompted to enter the manager name, employee ID, email address, and office number. Then, the user is asked if they want to add more team members with a choice of engineer or intern. If yes, the user is then prompted to input the employee's name, ID, email address, and if they selected engineer they will need to provide a github username, or if they selected intern they are prompted to input the intern's school. After each addition, the user is asked again if they wish to add a team member, and when they respond 'no' the application ends and an HTML file is built with the given information.

Walkthrough video:

https://user-images.githubusercontent.com/90212939/146710216-a1249046-1077-4402-840f-5071eb519e90.mp4

Example team profile built using this generator:

<img width="1436" alt="Screen Shot 2021-12-19 at 10 57 17 PM" src="https://user-images.githubusercontent.com/90212939/146710241-ac9436bc-b925-44ae-bd7f-4f28a0dc3876.png">

## Built With
* HTML
* CSS
* JavaScript
* Node.js
* Inquirer.js
* Jestn

## Tests
There are four tests that can be run for each of the four classes Employee, Manager, Engineer, and Intern, found in the __tests__ folder. These tests can be run from the command line using npm Jest. 

## Questions
If you have any questions, find me on GitHub at [cewright98](https://github.com/cewright98) or email me at cewright1998@gmail.com.
