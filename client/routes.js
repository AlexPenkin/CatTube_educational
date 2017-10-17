import React from 'react';
import { Route } from 'react-router';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Root from './containers/Root';
import Layout from './components/layout/Layout';

export default
    <Route
        path="/"
        component={Root}
    >
        <Route
            path="signup"
            component={Layout(SignUp)}
        />
        <Route
            path="login"
            component={Layout(Login)}
        />
    </Route>;
