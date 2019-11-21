const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


module.exports = {

    engQuestions: function engQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter Engineer Name: ',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Enter Engineer ID: ',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Enter Engineer Email: ',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Enter Engineer Github username: ',
                name: 'username'
            },

        ]).then(function ({ name, id, username, email, /*role*/ }) {
            //get data out over to app.js
            let eng = new Engineer(name, id, username, email, /*role*/ )
            console.log(eng)
        })

    },






    
    // intQuestions: function intQuestions() {
    //     inquirer.prompt([
    //         {
    //             type: 'input',
    //             message: 'Enter Intern Name: ',
    //             name: 'name'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter Intern ID: ',
    //             name: 'id'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter Intern Email: ',
    //             name: 'email'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter Intern School: ',
    //             name: 'school'
    //         },
    //     ])
    // },

    // mgrQuestions: function mgrQuestions() {
    //     inquirer.prompt([
    //         {
    //             type: `input`,
    //             message: `Please enter the name of the Team Manager: `,
    //             name: 'name'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter Manager ID: ',
    //             name: 'id'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter Manager Email: ',
    //             name: 'email'
    //         },
    //         {
    //             type: 'input',
    //             message: 'Enter Manager Office Phone Number: ',
    //             name: 'officeNumber'
    //         },
    //     ])
    // }
}


