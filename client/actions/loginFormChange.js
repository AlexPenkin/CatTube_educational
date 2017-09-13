export const LOGIN_FORM_CHANGED = 'LOGIN_FORM_CHANGED';

const formChange = (name, value) => ({
    type: LOGIN_FORM_CHANGED,
    name,
    value
});

export default formChange;
