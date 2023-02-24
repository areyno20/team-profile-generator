const Employee = require("./Employee");

const managerQuestionsData = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'id', 
        message: 'What is the managers ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
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

