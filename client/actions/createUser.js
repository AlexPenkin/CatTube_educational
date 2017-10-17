import 'whatwg-fetch';
import {
    addErrorWithoutShowning,
    addErrorWithShowning
} from './error';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_PENDING = 'CREATE_USER_PENDING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const pendingRequest = bool => ({
    type: CREATE_USER_PENDING,
    value: bool
});

const succsessRequest = payload => ({
    type: CREATE_USER_SUCCESS,
    value: payload
});

const errorRequest = err => ({
    type: CREATE_USER_ERROR,
    value: err
});

function makeError(name, message) {
    const error = new Error();
    error.name = name;
    error.message = message;
    return error;
}

export const createUser = (username, password, email) => (dispatch) => {
    dispatch(pendingRequest(true));
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({
            username,
            password,
            email
        })
    })
        .then((response) => {
            response.json().then((data) => {
                if (response.ok) {
                    return data;
                }
                if (response.status === 401) {
                    throw makeError('Wrong credentials', 'Enter proper credetials');
                } else if (response.status === 400) {
                    throw makeError('Registration error', data.message);
                }
                throw makeError('Connection error', 'Please, contact our cats');
            }).then(data => dispatch(succsessRequest(data)))
            .catch((err) => {
                dispatch(errorRequest(err));
                dispatch(addErrorWithShowning(err));
            });
        });
};


export default createUser;
