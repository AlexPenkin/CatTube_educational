import {
    FETCH_USER,
    FETCH_USER_ERROR,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS
} from '../actions/fetchUser';

import {LOGIN_FORM_CHANGED} from '../actions/loginFormChange';

const initialState = {
    username: '',
    password: '',
    pending: false,
    connections: 0

};

const User = (state = initialState, action) => {
    const {
        value,
        name
    } = action;
    switch (action.type) {
        case FETCH_USER_PENDING:
            return {
                ...state,
                connections: state.connections + 1,
                pending: Boolean(state.connection + 1)
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                username: value.username,
                connections: state.connections - 1,
                pending: Boolean(state.connection - 1)
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                username: 'error',
                connections: state.connections - 1,
                pending: Boolean(state.connection - 1)
            };
        case LOGIN_FORM_CHANGED:
            return {
                ...state,
                [name]: value
            };
        default:
            return state;
    }
};

export default User;
