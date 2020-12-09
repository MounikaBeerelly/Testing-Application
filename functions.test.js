/*
"Check for Truthy and Falsy values"
toBeNull matches only null
toBeUndefined mathes only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
toBe matcher for primitives, toEqual for arrays and objects
*/

const functions = require('./functions');

/*
beforeEach(() => initDatabase());
afterEach(() => closeDatabase());
beforeAll(() => console.log('beforeAll method..'));
afterAll(() => console.log('afterAll method..'));

const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database closed...');
*/
const nameCheck = () => console.log('Checking name..');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = "Mounika";
        expect(user).toBe('Mounika');
    });
    test('User is Upendar', () => {
        const user = 'Upendar';
        expect(user).toBe('Upendar');
    });
});

//toBe
test('Sum of 2 + 2 is equal to 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

// not
test('Sum of 2 + 2 is not equal to 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual - objects
test('User should be Mounika Reddy object', () => {
    expect(functions.createUser()).toEqual({
        firstName : 'Mounika',
        lastName : 'Reddy'
    });
});

// Less than and Greater than
test('Should be under 1000', () => {
    const a = 480;
    const b = 600;
   // expect(a+b).toBeLessThanOrEqual(1000);
    expect(a+b).toBeGreaterThanOrEqual(1000);
});

// Regex
test('There is no I in team', () => {
    expect('team in').not.toMatch(/I/i);
});

//Arrays
test('Admin should be usernames', () => {
    usernames = ['Mouni','Saritha', 'Divya'];
    expect(usernames).toContain('admin');
});

// working with async data
// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
       .then(data => {
           expect(data.name).toEqual('Leanne Graham');
       });
});

// async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
});