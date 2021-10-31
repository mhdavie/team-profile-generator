//here where you create your html page

//team members

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const { F_OK } = require('constants');
const path = require('path')

const DIST_DIR =path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/helper-template.js');

const teamMembers = [];
const ids = [];

// is where you'll put the inquirerer questions nad require helper-template

function main() {

    function creatingManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please provide the team manager's name"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Please provide the team manager's Id"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please provide the team manager's Email"
            },
            {
                type: 'input',
                name: 'managerPhone',
                message: "Please provide the team manager's phone number"
            }
        ]).then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerPhone,
            ); 
            teamMembers.push(manager);
            ids.push(answers.managerId);
            creatingTeam()
        })

    }

    function creatingTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamChoices',
                message: 'What team member would you like to add?',
                choices: ['Intern', 'Engineer', 'None'],

            },
        ]).then((selection) => {
            switch (selection.teamChoices) {
                case 'Intern': addingIntern();
                break;
                case 'Engineer': addingEngineer();
                break;
            default:
                finalTeam();
            }
        })

    }
    function addingIntern(){
        inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please provide the intern's name"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please provide the intern's Id"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please provide the intern's Email"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is the intern attending?"
        } ]).then((answers) => {
            const intern = new Intern (
                answers.internName,
                answers.internrId,
                answers.internEmail,
                answers.internSchool,
            ); 
            teamMembers.push(intern);
            ids.push(answers.internId);
            creatingTeam()
        })



    }
    function addingEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please provide the engineers's name"
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Please provide the engineers's Id"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please provide the engineers's Email"
            },
            {
                type: 'input',
                name: 'engineerGitHubUsername',
                message: "Please provide the engineers's GitHub Username"
            }]).then((answers) => {
                const enginner = new Engineer (
                    answers.engineerName,
                    answers.engineerId,
                    answers.engineerEmail,
                    answers.engineerGitHubUsername,
                ); 
                teamMembers.push(engineer);
                ids.push(answers.engineerId);
                creatingTeam()
            })


    }

    function finalTeam() {

    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
}
creatingManager()
}

main();


