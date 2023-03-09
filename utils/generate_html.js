/*function createPerson(person) {
    return `
        <div class="card"> 
            <p>${person.name} </p>
            <p>Manager ID: ${person.id}</p>
            <p>Email: ${person.email}</p>
            <p>Office Number: ${person.office}</p>
            <p>Github account: ${person.github}</p>
            <p>School: ${person.school}</p>
        </div>
    `
}
*/

function createPerson(person) {
    var personTemplate = `
    <div class="card"> 
        <p>${person.name} </p>
        <p>${person.role} ID: ${person.id}</p>
        <p>Email:  ${person.email}</p>
    
`
return personTemplate;
}

function createIntern(intern) {
    var internTemplate =  `
    ${createPerson(intern)}
    <p>School: ${intern.school}</p> 
    </div>
    `
    return internTemplate;
}

function createManager(manager) {
    var managerTemplate =  `
    ${createPerson(manager)}
    <p>Office Number: ${manager.office}</p> 
    </div>
    `
    return managerTemplate;
}

function createEngineer(engineer) {
    var engineerTemplate =  `
    ${createPerson(engineer)}
    <p>Github account: ${engineer.github}</p> 
    </div>
    `
    return engineerTemplate;
}


function genHTML(data) {
    
    let bodyInfo = ''
for (var i = 0; i < data.length; i++) {
    console.log("data[i]",data[i])
    
    if (data[i].role=="Engineer") { 
        bodyInfo += createEngineer(data[i])
    }
    else if (data[i].role=="Intern") { 
        bodyInfo += createIntern(data[i])
    }
    else if (data[i].role=="Manager") { 
        bodyInfo += createManager(data[i])
    } 
    else {
        var finalTemplate =  `${createPerson(data[i] )}
    </div>
        `
        bodyInfo += finalTemplate;
    }

}  




    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div class= "container"> 
        ${bodyInfo}
        
    </div>
    </body>
    <style>

        .container {
        
        display: flex;
        flex-wrap: wrap;
        
        
        
    }
        .card {
        
        flex: 0 0 calc(33.3% - 1%);    
        background-color:lightblue;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 10px 2px;

        }

    </style>
    </html>`
}

module.exports = genHTML