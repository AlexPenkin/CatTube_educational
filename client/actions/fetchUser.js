import 'whatwg-fetch';

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
        .then(response => response.json())
        .then(response => dispatch(succsessRequest(response)))
        .then(() => dispatch(pendingRequest(false)))
        .catch(err => dispatch(errorRequest(err)));
};


export default fetchUser;
