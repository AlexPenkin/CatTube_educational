import 'whatwg-fetch';
import { succsessRequestWithotPending } from '../actions/fetchUser';

let reqWasMade = false;

const auth = store => next => (action) => {
    const user = store.getState().user.username;
    if (user === 'Guest' && !reqWasMade) {
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
            reqWasMade = true;
        });
    }
    return next(action);
};

export default auth;
