export const FORM_CHANGED = 'FORM_CHANGED';

const formChange = formName => (name, value) => ({
    type: FORM_CHANGED,
    formName,
    name,
    value
});

export default formChange;
