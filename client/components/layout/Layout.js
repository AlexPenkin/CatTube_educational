import React from 'react';
import PropTypes from 'prop-types';
import ErrorSlide from '../../containers/ErrorSlide';
import Header from '../../containers/Header';
import Footer from '../footer/Footer';
import style from './layout.css';
import normalize from './normalize.css';
import fonts from './fonts.css';


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
    children: PropTypes.element.isRequired
};

export default Layout;
