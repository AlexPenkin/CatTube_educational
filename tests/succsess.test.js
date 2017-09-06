const succsessResponse = require('../scripts/succsessResponse');

test('must return succsess JSON', () => {
    expect(succsessResponse()).toHaveProperty('status', '200');
    expect(succsessResponse()).toHaveProperty('succsess', 'OK');
});

test('must return succsess response JSON with multiple parameters', () => {
    describe("with additional object", () => {
        expect(JSON.parse(succsessResponse([{test2: 1}]))).toHaveProperty('test2', 1);
    });
    describe("with two objects", () => {
        expect(JSON.parse(succsessResponse([{test: 'ok'}, {test2: 1}]))).toHaveProperty('test', 'ok');
    });
});

test('must return succsess response JSON with single object', () => {
    expect(JSON.parse(succsessResponse({test2: 1}))).toHaveProperty('test2', 1);
});