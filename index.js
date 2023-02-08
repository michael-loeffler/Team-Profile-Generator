const inquirer = require("inquirer");
// const src = require("./src");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = [
    {
        type: 'input',
        message: `What is the manager's name?`,
        name: 'name',
    },
    {
        type: 'input',
        message: `What is the manager's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the manager's email address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the manager's office number?`,
        name: 'office',
    },
];

const employeeType = [
    {
        type: 'list',
        message: 'Would you like to add an employee to your team?',
        name: 'employee',
        choices: ['Engineer', 'Intern', 'No, I am finished building my team.'],
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'engineerName',
    },
    {
        type: 'input',
        message: `What is the engineer's employee ID?`,
        name: 'engineerID',
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'engineerGithub',
    },
];

const internQuestions = [
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'internName',
    },
    {
        type: 'input',
        message: `What is the intern's employee ID?`,
        name: 'internID',
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'internEmail',
    },
    {
        type: 'input',
        message: `What school does the intern attend?`,
        name: 'internSchool',
    },
];

async function init() {
    let manager = await getManagerInfo(managerQuestions);
    let employee = await getNextEmployee(employeeType);
}

function getManagerInfo(questions) {
    inquirer
    .prompt(questions)
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        return manager;
    })
}

function getNextEmployee(employeeType, engineerQuestions, internQuestions) {
    inquirer
    .prompt(employeeType)
    .then((data) => {
        if (data.employee === 'Engineer') {
            return getEngineerInfo(engineerQuestions);
        } else if (data.employee === 'Intern') {
            return getInternInfo(internQuestions);
        } else {
            return;
        }
    })
}

function getEngineerInfo(questions) {
    inquirer
    .prompt(questions)
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        return engineer;
    })
}

function getInternInfo(questions) {
    inquirer
    .prompt(questions)
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        return intern;
    })
}

init();