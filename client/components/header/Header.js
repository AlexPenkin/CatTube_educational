import React from 'react';
import PropTypes from 'prop-types';
import {headerWrap, header, headerTitle} from './header.css';
import Spinner from './spinner/Spinner';
import UserSection from './userSection/UserSection';
import UserPane from './userPane/UserPane';

const Header = ({username, pending, userPaneIsOpen, tooglePane, closePane, logout}) => (
    <div className={headerWrap}>
        <div className={header}>
            <span className={headerTitle}>Cat Tube </span>
            {pending && <Spinner />}
            <UserSection tooglePane={tooglePane} closePane={closePane} />
            <UserPane username={username} isOpen={userPaneIsOpen} closePane={closePane} logout={logout} />
        </div>
    </div>
);

Header.propTypes = {
    pending: PropTypes.bool,
    username: PropTypes.string,
    userPaneIsOpen: PropTypes.bool,
    tooglePane: PropTypes.func,
    closePane: PropTypes.func,
    logout: PropTypes.func
};

Header.defaultProps = {
    userPaneIsOpen: false,
    username: 'Guest',
    pending: false,
    tooglePane: () => undefined,
    closePane: () => undefined,
    logout: () => undefined
};

export default Header;
