import {
    TOOGLE_PANE,
    CLOSE_PANE
} from '../actions/userPane';

const initialState = {
    isOpen: false
};

const UserPane = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_PANE:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case CLOSE_PANE:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
};

export default UserPane;
