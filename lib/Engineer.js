const Employee = require("./Employee");

const engineerQuestionsData = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers github?',
    }
];


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = { Engineer, engineerQuestionsData };
