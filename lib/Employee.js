// a class is like an object or a snippet of information that we can use elsewhere for diff purposes
class Employee {

    //properties
    // constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    // methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;