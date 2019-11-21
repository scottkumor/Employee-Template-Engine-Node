

function engQuestions() {
    let engRes = inquirer.prompt(
        {
            type: 'input',
            message: 'Enter Engineer Name: ',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter Engineer Github username: ',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Enter Engineer email: ',
            name: 'email'
        }
    )
    return { engRes }
}

function intQuestions() {
    let intRes = inquirer.prompt(
        {
            type: 'input',
            message: 'Enter Intern Name: ',
            name: 'name'
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
    )
    return { intRes };
}