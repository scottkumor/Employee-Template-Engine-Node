const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const constructions = require("./constructions");


function init() {

    inquirer.prompt([
    {
        type: `input`,
        message: `Please enter the name of the Team Manager`,
        name: 'mgrName'
    },
    {
        type: 'input',
        message: 'Enter Manager Email: ',
        name: 'email'
    },
    {
        type: 'list',
        name: 'empChoice',
        message: 'Choose the next Employee Entry:',
        choices: [
            { value: 'Engineer' },
            { value: 'Intern' },
        ]
    }
    ]).then(function({mgrName, empChoice}) {
        
        if (empChoice === "Engineer") {
            engQuestions();
        }
        if (empChoice === "Intern") {
            intQuestions();
        }
        // else {
        //     inquirer.prompt('Choose a valid employee type')
        // }
 });
}


init();

// fs.writeFile(`team.html`, htmlGen, () => {

//         console.log(`team.html written`);

//     return { html: htmlGen }
// })

// inquirer.prompt({
//     type: 'input',
//     message: 'Enter Employee Name: ',
//     name: 'name'
// })