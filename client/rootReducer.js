import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './reducers/user';
import loginForm from './reducers/loginForm';
import errors from './reducers/error';

const rootReducer = combineReducers({
    loginForm,
    user,
    errors,
    routing
});

export default rootReducer;
