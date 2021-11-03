const Manager = require('../lib/Manager');
const manager = new Manager ('Mariana', '001', 'mariana@gmail.com', '555-555-555');

test( 'test if it can get constructor values for the manager object', () =>{
    expect(manager.name).toBe('Mariana');
    expect(manager.id).toBe('001');
    expect(manager.email).toBe('mariana@gmail.com');
    expect(manager.officeNumber).toBe('555-555-555');
});

test('test if getName() method works',() =>{
    expect(manager.getName()).toBe('Mariana');
});

test('test if getId() method works',() =>{
    expect(manager.getId()).toBe('001');
});

test('test if getEmail() method works',() =>{
    expect(manager.getEmail()).toBe('mariana@gmail.com');
});

test('test if getOfficeNumber() method works',() =>{
    expect(manager.getOfficeNumber()).toBe('555-555-555');
});

test('test if  getRole()method works',() =>{
    expect(manager.getRole()).toBe('Manager');
});
