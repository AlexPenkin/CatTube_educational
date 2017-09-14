import {
    SHOW_ERROR,
    ADD_ERROR
} from '../actions/error';

const initialState = {
    errors: []
};

const makeErrorFabricWithCounter = () => {
    let counter = 0;
    return (errors, error) => {
        counter += 1;
        const errorsNew = [...errors];
        const errorObj = {
            id: counter,
            name: error.name || 'Not defined',
            message: error.message || 'Define error handler',
            shouldBeShown: false
        };
        errorsNew.push(errorObj);
        return errorsNew;
    };
};

const makeError = makeErrorFabricWithCounter();

const errors = (state = initialState, action) => {
    const {
        type,
        error
    } = action;
    switch (type) {
        case ADD_ERROR:
            return {
                ...state,
                errors: makeError(state.errors, error)
            };
        default:
            return state;
    }
};

export default errors;
