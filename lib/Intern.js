const Employee = require("./Employee");

const internQuestionsData = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the interns school?',
    }
];

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = { Intern, internQuestionsData };
