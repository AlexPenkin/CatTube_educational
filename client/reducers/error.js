import {
    ADD_ERROR_THAT_SHOULD_SHOW,
    ADD_ERROR_THAT_SHOULDNT_SHOW,
    SET_ERROR_SHOWN,
    SHOW_ERRORS
} from '../actions/error';

const initialState = {
    errors: [],
    errorWillBeShow: {
        id: 0,
        name: 'Not defined',
        message: 'Define error handler',
        shouldBeShown: false,
        isShown: false
    },
    mustShow: false
};

const filterErrorsThatMustBeShow = errors => errors.filter(el => el.shouldBeShown && !el.isShown);

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

const setShown = (errors) => {
    const newErrors = [...errors];
    const sortedErrors = filterErrorsThatMustBeShow(newErrors);
    const id = sortedErrors[0].id;
    const index = findByID(newErrors, id);
    newErrors[index].shouldBeShown = false;
    newErrors[index].isShown = true;
    return newErrors;
};


const makeError = makeErrorFabricWithCounter();

const errors = (state = initialState, action) => {
    const {
        type,
        error,
        id
    } = action;
    switch (type) {
        case ADD_ERROR_THAT_SHOULDNT_SHOW:
            return {
                ...state,
                errors: makeError(state.errors, error)
            };
        case ADD_ERROR_THAT_SHOULD_SHOW:
            return {
                ...state,
                errors: makeError(state.errors, error, {shouldBeShown: true})
            };

        case SET_ERROR_SHOWN:
            return {
                ...state,
                errors: setShown(state.errors),
                mustShow: false
            };
        case SHOW_ERRORS:
            return {
                ...state,
                errorWillBeShow: filterErrorsThatMustBeShow(state.errors)[0],
                mustShow: true
            };
        default:
            return state;
    }
};

export default errors;
