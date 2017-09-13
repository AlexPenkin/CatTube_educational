import {
    FETCH_USER,
    FETCH_USER_ERROR,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS
} from '../actions/fetchUser';

const initialState = {
    username: 'Guest',
    pending: false,
    connections: 0
};

const User = (state = initialState, action) => {
    const {
        value
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
                username: value.username,
                connections: connectionsDec,
                pending: connectionsDec !== 0
            };

        case FETCH_USER_ERROR:
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
