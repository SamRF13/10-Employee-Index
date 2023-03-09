//import everything using "require"
const inquirer = require("inquirer")
const questions = [
    {
    message: "what is the sports name",
    name:"name",
    type:"input"
},
{
    message: "what is the popularity",
    name:"pop",
    type:"input",
}
]
const allSports = []

class Sport{
    constructor(name, popularity){
        this.name = name
        this.popularity = popularity
    }
}

const sport1 = new Sport("baseball", 75)
const anything = new Sport("futbol", 99)

console.log(anything.popularity)

function menu(){
    
}

function createSport(){

inquirer.prompt(questions).then(answers => {
    const sport = new Sport(answers.name, answers.pop)
    allSports.push(sport)
})
}

createSport()


