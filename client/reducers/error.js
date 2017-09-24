import {
    ADD_ERROR_THAT_SHOULD_SHOW,
    ADD_ERROR_THAT_SHOULDNT_SHOW,
    SET_ERROR_SHOWN,
    SHOW_ERRORS
} from '../actions/error';

const initialState = {
    errors: [],
    errorsWillBeShow: [],
    mustShow: false
};

const makeErrorFabricWithCounter = () => {
    let counter = 0;
    return (errors, error, settings = {}) => {
        counter += 1;
        const errorsNew = [...errors];
        const errorObj = Object.assign({
            id: counter,
            name: error.name || 'Not defined',
            message: error.message || 'Define error handler',
            shouldBeShown: false,
            isShown: false
        }, settings);
        errorsNew.push(errorObj);
        return errorsNew;
    };
};

const findByID = (array, id) => {
    let desiredIndex = 'Not such element with this id';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.id === id) {
            desiredIndex = index;
            break;
        }
    }
    return desiredIndex;
};

const setShown = (errors, id) => {
    const newErrors = [...errors];
    const index = findByID(newErrors, id);
    newErrors.splice(index, 1);
    return newErrors;
};

const makeError = makeErrorFabricWithCounter();

const errors = (state = initialState, action) => {
    const {
        type,
        error,
        id
    } = action;
    let customError;
    let newErrors;
    switch (type) {
        case ADD_ERROR_THAT_SHOULDNT_SHOW:
            return {
                ...state,
                errors: makeError(state.errors, error)
            };
        case ADD_ERROR_THAT_SHOULD_SHOW:
            customError = makeError(state.errors, error, { shouldBeShown: true });
            newErrors = [...state.errorsWillBeShow];
            newErrors.push(customError[customError.length - 1]);
            return {
                ...state,
                errors: customError,
                errorsWillBeShow: newErrors
            };

        case SET_ERROR_SHOWN:
            return {
                ...state,
                errorsWillBeShow: setShown(state.errorsWillBeShow, id),
                mustShow: false
            };
        case SHOW_ERRORS:
            newErrors = [...state.errorsWillBeShow];
            newErrors.splice(0, 1);
            return {
                ...state,
                errorsWillBeShow: newErrors
            };
        default:
            return state;
    }
};

export default errors;
