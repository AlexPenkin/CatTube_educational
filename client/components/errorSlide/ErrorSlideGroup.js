import React from 'react';
import PropTypes from 'prop-types';
import styles from './errorSlide.css';
import ErrorSlideItem from './ErrorSlideItem';

const ErrorSlideGroup = ({ errorsWillBeShow, setErrorShown}) => {
    const content = errorsWillBeShow.map(item =>
        (<ErrorSlideItem
            name={item.name}
            message={item.message}
            id={item.id}
            setErrorShown={setErrorShown}
        />));
    return (
        <div className={errorsWillBeShow.length ? styles.errorSlideWrapShow : styles.errorSlideWrapHide}>
            {content}
        </div>
    );
};

ErrorSlideGroup.propTypes = {
    errorsWillBeShow: PropTypes.array,
    setErrorShown: PropTypes.func.isRequired

};

ErrorSlideGroup.defaultProps = {
    errorsWillBeShow: []
};

export default ErrorSlideGroup;
