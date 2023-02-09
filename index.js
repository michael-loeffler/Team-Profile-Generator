const inquirer = require("inquirer");
// const src = require("./src/src.html");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

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
        name: 'name',
    },
    {
        type: 'input',
        message: `What is the engineer's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'github',
    },
];

const internQuestions = [
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'name',
    },
    {
        type: 'input',
        message: `What is the intern's employee ID?`,
        name: 'id',
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What school does the intern attend?`,
        name: 'school',
    },
];

function init() {
    let manager = getManagerInfo(managerQuestions);
}

function getManagerInfo(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            team.push(manager);
            getNextEmployee(employeeType, engineerQuestions, internQuestions);
        })
}

function getNextEmployee(employeeType, engineerQuestions, internQuestions) {
    inquirer
        .prompt(employeeType)
        .then((data) => {
            if (data.employee === 'Engineer') {
                getEngineerInfo(engineerQuestions);
            } else if (data.employee === 'Intern') {
                getInternInfo(internQuestions);
            } else {

            }
            return data.employee;
        })
}

function getEngineerInfo(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            console.log(generateHTML());
        })
}

function getInternInfo(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
        })
}

function generateHTML() {

    for (let i = 0; i < team.length; i++) {
        var icon;
        var trait;
        switch (team[i].getRole()) {
            case 'Manager':
                icon = `<i class="fa-solid fa-mug-hot"></i>`;
                trait = `Office Number: ${team[i].getOfficeNumber()}`;
                break;
            case 'Engineer':
                icon = `<i class="fa-solid fa-screwdriver-wrench"></i>`;
                trait = `GitHub: ${team[i].getGithub()}`;
                break;
            case 'Intern':
                icon = `<i class="fa-sharp fa-solid fa-id-card"></i>`;
                trait = `School: ${team[i].getSchool()}`;
                break;
            default:
                break;
        }

        var main = $('.row');
    

        //- Creates new HTML elements -//
        var cardEl = $('<div>');
        cardEl.attr("class", "card");
        cardEl.attr("style", "width: 18rem;");

        var cardHeaderEl = $('<div>');
        cardHeaderEl.attr("class", "card-header bg-primary text-white");

        var nameEl = $('<h3>');
        var iconTitleEl = $('<h4>');

        var listEl = $('<ul>');
        listEl.attr("class", "list-group list-group-flush")
        var idEl = $('<li>');
        idEl.attr("class", "list-group-item")
        var emailEl = $('<li>');
        emailEl.attr("class", "list-group-item")
        var traitEl = $('<li>');
        traitEl.attr("class", "list-group-item")

        //- Appends all new HTML elements to each other creating a "card" -//
        cardHeaderEl.append(nameEl);
        cardHeaderEl.append(iconTitleEl);

        listEl.append(idEl);
        listEl.append(emailEl);
        listEl.append(traitEl);

        cardEl.append(cardHeaderEl);
        cardEl.append(listEl);

        main.append(cardEl);

        //- Writes data into associated elements -//
        nameEl.text(`${team[i].getName()}`);
        iconTitleEl.text(`${icon} ${team[i].getRole()}`);
        idEl.text(`ID: ${team[i].getId()}`);
        emailEl.innerHTML = `Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a>`;
        traitEl.text(`${trait}`);

   }
}

init();
