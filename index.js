
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

let empArray = [];

function init() {
    inquirer.prompt([
        {
            type: `input`,
            message: `Please enter the name of the Team Manager: `,
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter Manager ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter Manager Email: ',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter Manager Office Phone Number: ',
            name: 'officeNumber'
        }

    ])
        .then(answers => {
            mgr = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            empArray.push(mgr)
            newEmp();
        })
}


function engQuestions() {
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
    ]).then(answers => {
        eng = new Engineer(answers.name, answers.id, answers.email, answers.username);
        empArray.push(eng)
        newEmp();
    })
}


function intQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Intern Name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter Intern ID: ',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter Intern Email: ',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter Intern School: ',
            name: 'school'
        },
    ]).then(answers => {
        int = new Intern(answers.name, answers.id, answers.email, answers.school);
        empArray.push(int)
        newEmp();
    })
}

function newEmp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'empChoice',
            message: 'Choose the next Employee Entry',
            choices: [
                { value: 'Engineer' },
                { value: 'Intern' },
                { value: 'Quit and Generate Team' }
            ]
        }
    ]).then(({ empChoice }) => {
        if (empChoice === "Engineer") {
            engQuestions();
        }
        if (empChoice === "Intern") {
            intQuestions();
        }
        if (empChoice === "Quit and Generate Team") {
            htmlCreate();
        }
    })
}


function htmlCreate() {

    let htmlString = "";

    const htmlHead =
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="./assets/css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/layout.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
    <script src="https://kit.fontawesome.com/9963762e2c.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
    <title>The Dream Team</title>
    </head>

    <body id="pageWrapper" class="bgc-4 mnh-100v">
        <div class="d-f df-fdc">
            <div class="ta-r c-1 bgc-3 fz-jjj ts-i ts-b mt-m mr-l p-m s">
                The Dream Team
            </div>
            <div class="ta-l ml-l mt-m bgc-3 p-s s">
        `;

        let htmlFooter =
        `
            </div>
        </div>
    </body>
    
    </html>
    `;

    let cardWrapper = '';
    let newDiv = '';
    let specialAtt = '';
    let icon = '';

    empArray.forEach(emp => {
        if (emp.getRole() === "Manager"){icon = `<i class="c-0 p-s fa-2x fas fa-briefcase"></i>`}
        if (emp.getRole() === "Engineer"){icon = `<i class="c-0 p-s fa-2x fas fa-keyboard"></i>`}
        if (emp.getRole() === "Intern"){icon = `<i class="c-0 p-s fa-2x fas fa-portrait"></i>`}

        newDivHead = `
        <div class="m-m p-s bgc-1 c-4 d-f df-fdc s">           
            <div class="d-f bgc-4 ai-c">    
                ${icon}
                <div class=" c-0 p-s fz-jj">${emp.getRole()}: ${emp.name}</div>
            </div>
            <div class="p-s fz-j">ID: ${emp.id}</div>
            <div class="p-s fz-j">Email: ${emp.email}</div>
        `

        if (emp.getRole() === "Manager"){
            specialAtt = `<div class="p-s fz-j">Office Phone Number: ${emp.getOfficeNumber()}</div>`
            newDivHead += specialAtt;
        }
        if (emp.getRole() === "Engineer"){
            specialAtt = `<div class="p-s fz-j"> GitHub Username: ${emp. getGithub()}</div>`
            newDivHead += specialAtt;
        }
        if (emp.getRole() === "Intern"){
            specialAtt = `<div class="p-s fz-j">School: ${emp.getSchool()}</div>`
            newDivHead += specialAtt;
        }
        
        newDivFoot= `</div>`
                    
        newDiv = newDivHead + newDivFoot;

        cardWrapper += newDiv
    })

    htmlString = htmlHead + cardWrapper + htmlFooter;


    fs.writeFile(`team.html`, htmlString, () => {

        console.log(`team.html written`);

        return { html: htmlString }
    })
}

init();