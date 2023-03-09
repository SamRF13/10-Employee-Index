const Employee = require("./Employee");
/*
class Employee{
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getname(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
}
*/

class Manager extends Employee {
    constructor(name, id, email, office){
        super(name, id, email)
        this.office = office
        this.role = 'Manager'
    }
}
module.exports = Manager;
