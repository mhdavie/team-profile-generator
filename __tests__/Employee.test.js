
const Employee = require('../lib/Employee');
const employee = new Employee('Mariana', '001', 'mariana@gmail.com')

test('test if it canget constructor values for the employee object', () =>{
    expect(employee.name).toBe('Mariana');
    expect(employee.id).toBe('001');
    expect(employee.email).toBe('mariana@gmail.com');
});

test('test if getName()method works', () =>{
    expect(employee.getName()).toBe('Mariana')
});

test('test if getId() method works', ()  =>{
    expect(employee.getId()).toBe('001');
});

test('test if getEmail() method works', () =>{
    expect(employee.getEmail()).toBe('mariana@gmail.com')
});

test('test if getRole() method works', () =>{
    expect(employee.getRole()).toBe('Employee');
});