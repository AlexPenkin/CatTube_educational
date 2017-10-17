import {FORM_CHANGED} from '../actions/formChange';

const initialState = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: ''
};

const signUp = (state = initialState, action) => {
    const { value, name, formName } = action;
    const signUpFormChanged = formName === 'signUp';
    switch (action.type) {
        case FORM_CHANGED:
            if (signUpFormChanged) {
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

export default signUp;
