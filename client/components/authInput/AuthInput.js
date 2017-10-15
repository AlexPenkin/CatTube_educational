import React from 'react';
import PropTypes from 'prop-types';
import {inputImage, authInputWrap} from './AuthInput.css';

const image = (file, selector) => <img className={selector || 'ss'} alt="" src={file} />;

const AuthInput = ({name, type, className, value, placeholder, handler, postName, img}) =>
    (
        <div className={authInputWrap}>
            <input
                className={className}
                type={type || 'text'}
                name={name}
                placeholder={placeholder}
                value={value}
                required
                onChange={(event) => {
                    handler(postName, event.target.value);
                }}
            />
            {img && image(img, inputImage)}
        </div>
    );

AuthInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    postName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired,
    img: PropTypes.string
};

AuthInput.defaultProps = {
    postName: '',
    value: '',
    placeholder: '',
    img: ''
};

export default AuthInput;
