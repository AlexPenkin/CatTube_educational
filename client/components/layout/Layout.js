import React from 'react';
import PropTypes from 'prop-types';
import ErrorSlide from '../../containers/ErrorSlide';
import Header from '../../containers/Header';
import Footer from '../footer/Footer';
import style from './layout.css';
import normalize from './normalize.css';
// import fonts from './fonts.css';
import Login from '../../containers/Login';

const Layout = (Children) => {
    const wrappedComponent = props => (
        <div className={style.layout}>
            <Header />
            <ErrorSlide />
            <Children {...props} />
            <Footer />
        </div>
    );
    return wrappedComponent;
};

Layout.propTypes = {
    Children: PropTypes.object.isRequired
};

export default Layout;
