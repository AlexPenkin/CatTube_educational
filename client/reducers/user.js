import {
    INCREMENT
} from '../actions/increment';


const initialState = {
    value: 0
};

const User = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
        default:
            return state;
    }
};

export default User;
