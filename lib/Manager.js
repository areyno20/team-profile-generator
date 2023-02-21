const Employee = require("./Employee");

const managerQuestionsData = [
    {
        type: 'input',
        name: 'Manager Name',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'Manager ID', 
        message: 'What is the managers ID?'
    },
    {
        type: 'input',
        name: 'Manager Email',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'Manager Office Number',
        message: 'What is the managers office number?'
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

module.exports = { Manager, managerQuestionsData };

