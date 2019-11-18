const fs = require("fs");
const inquirer = require("inquirer");




class Employee {
    // all base parameters
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() {
        //stuff to get empl name
    }

    getId() {
        //stuff to get empl id
    };

    getEmail() {
        //stuff to get empl email
    };

    getRole() {
        //stuff to get role, Employee
    };
}

class Manager extends Employee {

    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        //overrides to return Manager
    }
}

class Engineer extends Employee {

    constructor(github) {
        this.github = github;
    }

    getGitHub() {
        //gets github username
    }
    getRole() {
        //overrides to return Engineer
    }
}

class Intern extends Employee {

    constructor(school) {
        this.school = school;
    }

    getSchool() {
        //gets school name
    }
    getRole() {
        //overrides to return Intern
    }
}























// fs.writeFile(`team.html`, htmlGen, () => {
               
//         console.log(`team.html written`);
    
//     return { html: htmlGen }
// })