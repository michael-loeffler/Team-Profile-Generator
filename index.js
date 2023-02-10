//-- IMPORT NECESSARY NODE PACKAGES AND 3 EMPLOYEE CLASSES --//
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//-- GLOBAL VARIABLE TO CONTINUALLY ADD TEAM MEMBERS TO --//
const team = [];

//-- INQUIRER PROMPTS, QUESTION ARRAYS FOR EACH EMPLOYEE TYPE AND 1 FOR MENU OPTIONS --//
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

//-- FUNCTIONS --//
//- Creates a function that initializes the app; it is called immediately when the app is ran and asks for information about the Manager of the team. -//
function init() {
    getManagerInfo(managerQuestions);
};

//- Creates a function to gather information for the Manager of the team, create a new Manager object, add it to the team array, and call the getNextEmployee function. -//
function getManagerInfo(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            team.push(manager);
            getNextEmployee(employeeType, engineerQuestions, internQuestions);
        })
};

//- Creates a function to ask the Manager/user if they would like to add an Engineer or Intern to the team, or to finish creating their team. It uses the answer chosen by the Manager/user to determine how to proceed. If they select Engineer or Intern, it will call the respective inquirer function. If they would like to finish creating their team, it will call the generateHTML function to build the html and write the teamProfile.html file. -//
function getNextEmployee(employeeType, engineerQuestions, internQuestions) {
    inquirer
        .prompt(employeeType)
        .then((data) => {
            if (data.employee === 'Engineer') {
                getEngineerInfo(engineerQuestions);
            } else if (data.employee === 'Intern') {
                getInternInfo(internQuestions);
            } else {
                generateHTML();
            }
        })
};
//- Creates a function to gather information for any Engineers on the team, create new Engineer objects, add them to the team array, and always call the getNextEmployee function when it is finished. -//
function getEngineerInfo(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            getNextEmployee(employeeType, engineerQuestions, internQuestions);
        })
};

//- Creates a function to gather information for any Interns on the team, create new Intern objects, add them to the team array, and always call the getNextEmployee function when it is finished. -//
function getInternInfo(questions) {
    inquirer
        .prompt(questions)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            getNextEmployee(employeeType, engineerQuestions, internQuestions);
        })
};

//- Creates a function that generates the HTML content for the teamProfile.html webpage using a switch-case structure to obtain unique information by employee type, then several template literals and Class methods to add employee data to "cards". The function loops over the team array to create a card for each employee on the team, creates an array of cards, joins them all together, and adds them into the template literal comprising the html boilerplate. Finally, it writes the data to a file named "teamProfile.html", adds the file to the dist directory, and logs out a confirmation message. -//
function generateHTML() {
    var cards = [];
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
        var newCard = `
            <div class="card p-0 mb-3" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h3>${team[i].getName()}</h3>
                    <h4>${icon} ${team[i].getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></li>
                    <li class="list-group-item">${trait}</li>
                </ul>
            </div>`;
        cards.push(newCard);
    }

    const htmlBlock = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
        />
        <script src="https://kit.fontawesome.com/f32375b844.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h2 class="text-center text-white bg-danger lh-lg">My Team</h2>
        </header>
        <main class="row d-flex justify-content-evenly">
            ${cards.join('\n')}
        </main>
        <footer>
        </footer>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="../index.js"></script>
    </body>
    
    </html>`;

    const fileName = "teamProfile.html";
    fs.writeFile(`./dist/${fileName}`, htmlBlock, (err) =>
        err ? console.error(err) : console.log(`Success! Your ${fileName} file has been created and added to the dist folder!`))
};

//- Call of the init function at the outset to initialize app -//
init();

