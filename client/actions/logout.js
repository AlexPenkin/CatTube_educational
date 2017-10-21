import 'whatwg-fetch';
import {addErrorWithShowning} from './error';
import makeError from '../utils/makeError';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const pendingRequest = bool => ({
    type: LOGOUT_PENDING,
    value: bool
});

export const succsessRequest = username => ({
    type: LOGOUT_SUCCESS,
    username
});

export const succsessRequestWithotPending = payload => ({
    type: LOGOUT_ERROR,
    username: payload
});

const errorRequest = err => ({
    type: LOGOUT_ERROR,
    value: err
});

export const logout = () => (dispatch) => {
    dispatch(pendingRequest(true));
    fetch('/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then((response) => {
            if (response.ok) {
                return 'succsess';
            }
            throw makeError('Connection error', 'Please, contact our cats');
        })
        .then(() => dispatch(succsessRequest('Guest')))
        .catch((err) => {
            dispatch(errorRequest(err));
            dispatch(addErrorWithShowning(err));
        });
};


export default logout;
