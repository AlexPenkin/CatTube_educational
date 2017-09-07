const {encrypt, decrypt} = require('../scripts/crypt/makeHash');

test('must return hash string for 123', async () => {
    expect.assertions(1);
    return expect(typeof await encrypt('123')).toBe('string');
});

test('must return string for 0353aa1d04ec153d51658978d0607828:b470160e49f5e1bef0ee64f91b8d3122', async () => {
    expect.assertions(1);
    return expect(await decrypt('0353aa1d04ec153d51658978d0607828:b470160e49f5e1bef0ee64f91b8d3122')).toBe('123');
});