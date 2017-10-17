import {
    FETCH_USER_ERROR,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_SUCCESS_WITHOUT_PENDING
} from '../actions/fetchUser';

import {
    CREATE_USER_ERROR,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS
} from '../actions/createUser';

const initialState = {
    username: 'Guest',
    pending: false,
    connections: 0
};

const User = (state = initialState, action) => {
    const {
        username
    } = action;
    const connectionsInc = state.connections + 1;
    const connectionsDec = state.connections - 1;
    switch (action.type) {
        case FETCH_USER_PENDING:
            return {
                ...state,
                connections: connectionsInc,
                pending: connectionsInc + 1 !== 0
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                username: username || state.username,
                connections: connectionsDec,
                pending: connectionsDec !== 0
            };
        case FETCH_USER_SUCCESS_WITHOUT_PENDING:
            return {
                ...state,
                username
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                connections: connectionsDec,
                pending: connectionsDec !== 0
            };
        case CREATE_USER_PENDING:
            return {
                ...state,
                connections: connectionsInc,
                pending: connectionsInc + 1 !== 0
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                connections: connectionsDec,
                pending: connectionsDec !== 0
            };

        case CREATE_USER_ERROR:
            return {
                ...state,
                username: 'error',
                connections: connectionsDec,
                pending: connectionsDec !== 0
            };
        default:
            return state;
    }
};

export default User;
