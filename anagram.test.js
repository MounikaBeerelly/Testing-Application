const isAnagram = require('./anagram');

it('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

it(' "Cinema" is an anagram of "iceman" ', () => {
    expect(isAnagram('cinema','iceman')).toBeTruthy();
});

it('"Dormitory" is an anagram of "dirty room##"',() => {
    expect(isAnagram('Dormitory','dirty room##')).toBeTruthy();
});

it('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello','Aloha')).toBeFalsy();
});
