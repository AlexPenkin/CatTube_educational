const caseInsensetiveCoparassion = require('../scripts/utils/caseInsensetiveCoparassion');

test('compare credentials case-insensitive', () => {
    expect(caseInsensetiveCoparassion('aaAAss4422', 'AAaAsS4422')).toBeTruthy()
    expect(caseInsensetiveCoparassion('asaAA2', 'AAaaa2')).toBeFalsy()
});