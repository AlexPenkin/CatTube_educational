import {LOGIN_FORM_CHANGED} from '../actions/loginFormChange';

const initialState = {
    username: '',
    password: ''
};

const loginForm = (state = initialState, action) => {
    const { value, name } = action;
    switch (action.type) {
        case LOGIN_FORM_CHANGED:
            return {
                ...state,
                [name]: value
            };
        default:
            return state;
    }
};

export default loginForm;
