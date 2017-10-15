import React from 'react';
import { Route } from 'react-router';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Root from './containers/Root';

export default
    <Route
        path="/"
        component={Root}
    >
        <Route
            path="signup"
            component={SignUp}
        />
        <Route
            path="login"
            component={Login}
        />
    </Route>;
