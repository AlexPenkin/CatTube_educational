import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import style from './layout.css';
import normalize from './normalize.css';
import fonts from './fonts.css';

const Layout = ({
    children
}) => (
    <div className={style.layout}>
        <Header />
        {children}
        <Footer />
    </div>
);

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
