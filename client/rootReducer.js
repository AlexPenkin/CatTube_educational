import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './reducers/user';
import loginForm from './reducers/loginForm';
import signUp from './reducers/signUpForm';
import errors from './reducers/error';

const rootReducer = combineReducers({
    loginForm,
    signUp,
    user,
    errors,
    routing
});

export default rootReducer;
