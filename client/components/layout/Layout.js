import React from 'react';
import PropTypes from 'prop-types';
import ErrorSlide from '../../containers/ErrorSlide';
import Header from '../../containers/Header';
import Footer from '../footer/Footer';
import style from './layout.css';
import normalize from './normalize.css';
// import fonts from './fonts.css';
import Login from '../../containers/Login';

const Layout = ({
    children
}) => (
    <div className={style.layout}>
        <Header />
        <ErrorSlide />
        {children}
        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.array.isRequired
};

export default Layout;
