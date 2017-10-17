import React from 'react';
import spinnerSvg from './spinner.svg';
import {spinnerWrap, spinner} from './spinner.css';

const Spinner = () => (
    <div className={spinnerWrap}>
        <img className={spinner} src={spinnerSvg} alt="" />
    </div>
);

export default Spinner;
