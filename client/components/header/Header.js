import React from 'react';
import PropTypes from 'prop-types';
import {headerWrap, header, headerTitle} from './header.css';
import Spinner from './spinner/Spinner';
import UserSection from './userSection/UserSection';

const Header = ({username, pending}) => (
    <div className={headerWrap}>
        <div className={header}>
            <span className={headerTitle}>Cat Tube </span>
            {pending && <Spinner />}
            <UserSection />
        </div>
    </div>
);

Header.propTypes = {
    pending: PropTypes.bool,
    username: PropTypes.string
};

Header.defaultProps = {
    username: 'Guest',
    pending: false
};

export default Header;
