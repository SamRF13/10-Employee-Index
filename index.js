const inquirer = require("inquirer")
const fs = require('fs')
const genHTML = require('./utils/generate_html')
const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

const team = []
const questions = [
    {
        message: "Please input the persons position",
        name:"position",
        type:"list",
        choices: ["Manager", "Engineer", "Intern", "Done"]
    },
]

const questionsManager = [
    {
    message: "what is the Manager's name?",
    name:"name",
    type:"input"
},
{
    message: "what is the Manager's ID number?",
    name:"id",
    type:"input"
},
{
    message: "what is the Manager's email?",
    name:"email",
    type:"input"
},
{
    message: "what is the Manager's office?",
    name:"office",
    type:"input"
},
]

const questionsEngineer = [
    {
    message: "what is the Engineer's name?",
    name:"name",
    type:"input"
},
{
    message: "what is the Engineer's ID number?",
    name:"id",
    type:"input"
},
{
    message: "what is the Engineer's email?",
    name:"email",
    type:"input"
},
{
    message: "what is the Engineer's Github username?",
    name:"github",
    type:"input"
},
]

const questionsIntern = [
    {
    message: "what is the Intern's name?",
    name:"name",
    type:"input"
},
{
    message: "what is the Intern's ID number?",
    name:"id",
    type:"input"
},
{
    message: "what is the Intern's email?",
    name:"email",
    type:"input"
},
{
    message: "What school is the Intern from?",
    name:"school",
    type:"input"
},
]
function promptMenu(){
    inquirer.prompt(questions).then(answer => {
        console.log(answer)
        if(answer.position === "Manager"){
        inquirer.prompt(questionsManager).then(answer => { 
            console.log(answer)
            team.push(new Manager(answer.name, answer.id, answer.email, answer.office));
            console.log(team)
            promptMenu()
        })
    };
        if(answer.position === "Engineer"){
            inquirer.prompt(questionsEngineer).then(answer => { 
                console.log(answer)
                team.push(new Engineer(answer.name, answer.id, answer.email, answer.github));
                console.log(team)
                promptMenu()
            })
        };
            if(answer.position === "Intern"){
                inquirer.prompt(questionsIntern).then(answer => { 
                    console.log(answer)
                    team.push(new Intern(answer.name, answer.id, answer.email, answer.school));
                    console.log(team)
                    promptMenu()
                })
                };
        if(answer.position === "Done"){
            fs.writeFile('index.html',genHTML(team), err => console.log(err) )
        }
    })
};


promptMenu()