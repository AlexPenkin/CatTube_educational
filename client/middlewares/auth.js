import 'whatwg-fetch';
import { succsessRequestWithotPending } from '../actions/fetchUser';

const auth = store => next => (action) => {
    const user = store.getState().user.username;
    if (user === 'Guest') {
        fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => response.json())
        .then((data) => {
            if (data.username) {
                store.dispatch(succsessRequestWithotPending(data.username));
            }
            return next(action);
        });
    }
    return next(action);
};

export default auth;
