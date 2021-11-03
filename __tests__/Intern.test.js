const Intern = require('../lib/Intern');
const intern = new Intern ('Charlie', '003', 'charlie@gmail.com', 'Harvard');

test( 'test if it can get constructor values for the intern object', () =>{
    expect(intern.name).toBe('Charlie');
    expect(intern.Id).toBe('003');
    expect(intern.email).toBe('charlie@gmail.com');
    expect(intern.school).toBe('Harvard');
});

test('test if getName() method works',() =>{
    expect(intern.getName()).toBe('Charlie');
});

test('test if getId() method works',() =>{
    expect(intern.getId()).toBe('003');
});

test('test if getEmail() method works',() =>{
    expect(intern.getEmail()).toBe('charlie@gmail.com');
});

test('test if getOfficeNumber() method works',() =>{
    expect(intern.getSchool()).toBe('Harvard');
});

test('test if  getRole()method works',() =>{
    expect(intern.getRole()).toBe('Intern');
});
