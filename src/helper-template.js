const Engineer = require("../lib/Engineer")

const makeTeam = team => {
    const makeManager = manager => {
        return `
        <h2 class="card-title">${manager.getName()}</h2>
        
        `
    }
    
    const makeEngineer = engineer => {
        return `
        <h2 class="card-title">${engineer.getName()}</h2>
        
        `
    }

}