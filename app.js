const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const constructions = require('./constructions');

function init(){
//take down manager name, email, choose next employee
inquirer.prompt([
    {
        type: `input`,
        message: `Please enter your name: `,
        name: 'creator'
    },
    {
        type: 'list',
        name: 'empChoice',
        message: 'Choose the next Employee Entry',
        choices: [
            //{ value: 'Manager' },
            { value: 'Engineer' },
            //{ value: 'Intern' },
            //{ value: 'Quit and start over?' }
        ]
    }
])
    .then(function ({ creator, empChoice }) {

        if (empChoice === "Engineer") {
            constructions.engQuestions();
        }
        // if (empChoice === "Intern") {
        //     constructions.intQuestions();
        // }
        // if (empChoice === "Manager") {
        //     constructions.mgrQuestions();
        // }
        // if (empChoice === "Quit and start over?") {
        //     init();
        //}
    })

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