const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Andrew', '002', 'andrew@gmail.com', 'adavie');

test( 'test if it can get constructor values for the engineer object', () =>{
    expect(engineer.name).toBe('Andrew');
    expect(engineer.id).toBe('002');
    expect(engineer.email).toBe('andrew@gmail.com');
    expect(engineer.githubUsername).toBe('adavie');
});

test('test if getName()method works',() =>{
    expect(engineer.getName()).toBe('Andrew');
});

test('test if getId() method works',() =>{
    expect(engineer.getId()).toBe('002');
});

test('test if getEmail() method works',() =>{
    expect(engineer.getEmail()).toBe('andrew@gmail.com');
});

test('test if getGithub() method works',() =>{
    expect(engineer.getGithub()).toBe('adavie');
});

test('test if  getRole()method works',() =>{
    expect(engineer.getRole()).toBe('Engineer');
});

  