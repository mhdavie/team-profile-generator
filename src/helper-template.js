const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")
const { markAsUntransferable } = require("worker_threads")


const makeTeam = team => {
    const makeManager = manager => {
        return `
        <h5 class="card-title">${manager.getName()}</h2>
        <li class="list-group-item">${manager.getId()}</li>
        <li class="list-group-item">${manager.getEmail()}</li>
        <li class="list-group-item">${manager.getOfficeNumber()}</li>
        `
    }

    const makeEngineer = engineer => {
        return `
        <h5 class="card-title">${engineer.getName()}</h2>
        <li class="list-group-item">${engineer.getId()}</li>
        <li class="list-group-item">${engineer.getEmail()}</li>
        <li class="list-group-item">${engineer.getGithub()}</li>
        
        `
    }

    const makeIntern = intern => {
        return `
        <h5 class="card-title">${intern.getName()}</h2>
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item">${intern.getEmail()}</li>
        <li class="list-group-item">${intern.getSchool()}</li>
        
        `
    }

    makeTeam()


}