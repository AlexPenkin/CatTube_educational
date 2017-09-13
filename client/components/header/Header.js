import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';
import logo from './cat_logo_128.png';

const Header = () => (
    <div className={styles.headerWrap}>
        <div className={styles.header}>
            <img className="cat-logo-header" alt="" src={logo} />
        </div>
    </div>
);

Header.propTypes = {
};

Header.defaultProps = {

};

export default Header;
