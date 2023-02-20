const inquirer = require('inquirer');
const template  = require('./src/webpage.js');
const generateHTML = require('./src/generateHTML.js');


const {Manager, managerQuestions} = require('./lib/Manager');
const {Engineer, engineerQuestions} = require('./lib/Engineer');
const {Intern, internQuestions} = require('./lib/Intern');

const employees = [];

const init = () => { managerQuestions()};

const managerQuestions = () => {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        addEmployee();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        addEmployee();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        addEmployee();
    })
}

const employeePrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then((answers) => {
        if (answers.employeeType === 'Engineer') {
            engineerQuestions();
        };
        if (answers.employeeType === 'Intern') {
            internQuestions();
        };
        if (answers.employeeType === 'None') {
            let html = template(employees);
            console.log(html);
            generateHTML(html);
        };
    })
}

init();
