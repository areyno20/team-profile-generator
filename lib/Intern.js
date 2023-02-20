const Employee = require("./Employee");

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'What school do you attend?',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter your school!');
                return false;
            }
        }
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

module.exports = { Intern, internQuestions };
