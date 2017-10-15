import React from 'react';
import PropTypes from 'prop-types';
import {slideItemImg, slideItem, slideItemText} from './TwoColumns.css';


const TwoColumns = ({image, text}) =>
    (
        <div className={slideItem}>
            <img className={slideItemImg} src={image} alt="" />
            <span className={slideItemText}>{text}</span>
        </div>
    );

TwoColumns.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};


export default TwoColumns;
