import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';
import logo from './cat_logo_128.png';
import Spinner from '../spinner/Spinner';

const Header = ({username, pending}) => (
    <div className={styles.headerWrap}>
        <div className={styles.header}>
            <img className={styles.catLogoHeader} src={logo} alt="" />
            <span>{username}</span>
            {pending && <Spinner />}
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
