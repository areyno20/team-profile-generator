const inquirer = require('inquirer');
const template  = require('./src/webpage.js');
const generateHTML = require('./src/generateHTML.js');


const {Manager, managerQuestionsData} = require('./lib/Manager');
const {Engineer, engineerQuestionsData} = require('./lib/Engineer');
const {Intern, internQuestionsData} = require('./lib/Intern');

const employees = [];

const init = () => {managerQuestions()}

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsData)
    .then((answers) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(answers);
        employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsData)
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionsData)
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee would you like to add?',
            choices: [
                {name: 'Engineer', value: 'Engineer'},
                {name: 'Intern', value: 'Intern'},
                {name: 'Done', value: 'Done'}
            ]
        }
    ])
    .then((answers) => {
        if (answers.employeeType === 'Engineer') {
            engineerQuestions();
        };
        if (answers.employeeType === 'Intern') {
            internQuestions();
        };
        if (answers.employeeType === 'Done') {
            let html = template(employees);
            console.log(html);
            generateHTML(html);
        };
    })
}

init();
