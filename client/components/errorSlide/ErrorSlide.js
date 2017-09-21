import React from 'react';
import PropTypes from 'prop-types';
import styles from './errorSlide.css';

const ErrorSlide = ({ errorWillBeShow, mustShow }) => (
    <div className={mustShow ? styles.errorSlideWrapShow : styles.errorSlideWrapHide}>
        <div className={styles.errorSlide}>
            <span className={styles.errorTitleShow}>{errorWillBeShow.name}: </span>
            <span className={styles.errorMessage}>{errorWillBeShow.message} </span>
        </div>
    </div>
);

ErrorSlide.propTypes = {
    errorWillBeShow: PropTypes.object.isRequired,
    mustShow: PropTypes.bool.isRequired
};

ErrorSlide.defaultProps = {
    errorWillBeShow: {
        id: 0,
        name: 'Not defined',
        message: 'Define error handler',
        shouldBeShown: false,
        isShown: false
    }
};

export default ErrorSlide;
