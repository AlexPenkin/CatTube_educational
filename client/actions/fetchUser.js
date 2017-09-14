import 'whatwg-fetch';
import addError from './error';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

const pendingRequest = bool => ({
    type: FETCH_USER_PENDING,
    value: bool
});

const succsessRequest = payload => ({
    type: FETCH_USER_SUCCESS,
    value: payload
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
                throw makeError('Wrong credentials!', 'Enter proper credetials');
            }
            throw makeError('Connection error', 'Please, contact our cats');
        })
        .then(response => dispatch(succsessRequest(response)))
        .catch((err) => {
            dispatch(errorRequest(err));
            dispatch(addError(err));
        });
};


export default fetchUser;
