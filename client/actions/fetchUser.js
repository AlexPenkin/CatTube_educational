import 'whatwg-fetch';
import {addErrorWithoutShowning, addErrorWithShowning} from './error';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS_WITHOUT_PENDING = 'FETCH_USER_SUCCESS_WITHOUT_PENDING';

export const pendingRequest = bool => ({
    type: FETCH_USER_PENDING,
    value: bool
});

export const succsessRequest = payload => ({
    type: FETCH_USER_SUCCESS,
    username: payload
});

export const succsessRequestWithotPending = payload => ({
    type: FETCH_USER_SUCCESS_WITHOUT_PENDING,
    username: payload
});

const errorRequest = err => ({
    type: FETCH_USER_ERROR,
    value: err
});

function makeError(name, message) {
    const error = new Error();
    error.name = name;
    error.message = message;
    return error;
}

export const fetchUser = (username, password) => (dispatch) => {
    dispatch(pendingRequest(true));
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            username,
            password
        })
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            if (response.status === 401) {
                throw makeError('Wrong credentials', 'Enter proper credetials');
            }
            if (response.status === 400) {
                throw makeError('Please continue', 'We have been recognize you by your tail =)');
            }
            throw makeError('Connection error', 'Please, contact our cats');
        })
        .then(response => dispatch(succsessRequest(response.username)))
        .catch((err) => {
            dispatch(errorRequest(err));
            dispatch(addErrorWithShowning(err));
        });
};


export default fetchUser;
