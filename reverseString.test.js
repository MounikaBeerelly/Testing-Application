const { TestScheduler } = require('jest');
const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverse with upperCase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});