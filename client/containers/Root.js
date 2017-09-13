import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../routes';
import DevTools from './DevTools';
import Layout from '../components/layout/Layout';

const Root = ({ store, history }) => (
    <Provider store={store}>
        <Layout>
            <Router history={history} routes={routes} />
            <DevTools />
        </Layout>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
