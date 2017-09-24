import React from 'react';
import PropTypes from 'prop-types';
import styles from './errorSlide.css';

const ErrorSlideItem = ({ name, message, id, setErrorShown }) => (
    <div className={styles.errorSlide}>
        <div>
            <span className={styles.errorTitle}>{name}: </span>
            <span className={styles.errorMessage}>{message} </span>
        </div>
        <div
            className={styles.close}
            onClick={() => {
                setErrorShown(id);
            }}
        />
    </div>
);

ErrorSlideItem.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
    setErrorShown: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

ErrorSlideItem.defaultProps = {
    name: 'Error',
    message: 'undefined'
};

export default ErrorSlideItem;
