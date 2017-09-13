import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './reducers/user';
import loginForm from './reducers/loginForm';

const rootReducer = combineReducers({
    loginForm,
    user,
    routing
});

export default rootReducer;
