export const SHOW_ERROR = 'SHOW_ERROR';
export const ADD_ERROR = 'ADD_ERROR';

const addError = error => ({
    type: ADD_ERROR,
    error
});

export default addError;
