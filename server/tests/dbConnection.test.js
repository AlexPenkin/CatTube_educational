const createDBConnection = require('../scripts/bin/createDBConnection');

var globalCon;

test('establishin connection to db', () => {
    expect.assertions(1);
    return createDBConnection().then(connection => {
        globalCon = connection;
        expect(connection._status.online).toBeTruthy();
    });
});

test('end connection', async () => {
    expect.assertions(1);
    expect(globalCon.end()).resolves.toBe('disconnected');
})

test('at the end must be offline', () => {
    expect(globalCon._status.online).toBeFalsy();
})
