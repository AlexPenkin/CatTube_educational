const createDBConnection = require('../scripts/bin/createDBConnection');
const searchUser = require('../scripts/auth/searchUser');

test('must return user test', async () => {
    const connection = await createDBConnection();
    expect.assertions(1);
    const result = await searchUser('test', connection);
    expect(result.username).toBe('test');
});