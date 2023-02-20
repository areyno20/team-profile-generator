const Employee = require("./Employee");

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter your office number!');
                return false;
            }
        }
    }
];

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = { Manager, managerQuestions };

