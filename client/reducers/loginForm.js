import {FORM_CHANGED} from '../actions/formChange';

const initialState = {
    username: '',
    password: ''
};

const loginForm = (state = initialState, action) => {
    const { value, name, formName } = action;
    const loginFormChanged = formName === 'login';
    switch (action.type) {
        case FORM_CHANGED:
            if (loginFormChanged) {
                return {
                    ...state,
                    [name]: value
                };
            }
            return state;
        default:
            return state;
    }
};

export default loginForm;
