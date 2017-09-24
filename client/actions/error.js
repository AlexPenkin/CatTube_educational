export const SHOW_ERRORS = 'SHOW_ERRORS';
export const ADD_ERROR_THAT_SHOULD_SHOW = 'ADD_ERROR_THAT_SHOULD_SHOW';
export const ADD_ERROR_THAT_SHOULDNT_SHOW = 'ADD_ERROR_THAT_SHOULDNT_SHOW';
export const SET_ERROR_SHOWN = 'SET_ERROR_SHOWN';

export const addErrorWithoutShowning = error => ({
    type: ADD_ERROR_THAT_SHOULDNT_SHOW,
    error
});

export const setErrorShown = id => ({
    type: SET_ERROR_SHOWN,
    id
});

export const showErrors = { type: SHOW_ERRORS };

export const addErrorWithShowning = error => (dispatch) => {
    dispatch({
        type: ADD_ERROR_THAT_SHOULD_SHOW,
        error
    });
    setTimeout(() => {
        dispatch(showErrors);
    }, 50000);
};
