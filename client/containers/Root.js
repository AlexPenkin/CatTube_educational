import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';
import DevTools from './DevTools';
import Layout from '../components/layout/Layout';

const Root = ({ store, history }) => (
    <Provider store={store}>
            <div style={{height: '100%'}}>
                <DevTools />
                <Router history={history} routes={routes} />
            </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
