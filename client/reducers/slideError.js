import {
    SHOW_ERRORS,
    SET_ERROR_SHOWN
} from '../actions/error';


const initialState = {
    errorToShow: null
};

const slideError = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ERRORS:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default slideError;
