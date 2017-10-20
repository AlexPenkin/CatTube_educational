import React from 'react';
import PropTypes from 'prop-types';
import {inputImage, authInputWrap} from './AuthInput.css';

const image = (file, selector) => <img className={selector || 'ss'} alt="" src={file} />;

class AuthInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        const {
            name,
            type,
            className,
            wrongClassName,
            value,
            placeholder,
            handler,
            postName,
            img,
            validation
        } = this.props;
        return (
            <div className={authInputWrap}>
                <input
                    className={validation(value) ? className : wrongClassName}
                    type={type || 'text'}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    required
                    ref={(input) => { this.ref = input; }}
                    onChange={(event) => {
                        handler(postName, event.target.value);
                    }}
                />
                {img && image(img, inputImage)}
                {console.log(this.ref === document.activeElement)}
            </div>
        );
    }
}

AuthInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    wrongClassName: PropTypes.string,
    postName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handler: PropTypes.func.isRequired,
    img: PropTypes.string,
    validation: PropTypes.func
};

AuthInput.defaultProps = {
    className: '',
    wrongClassName: '',
    postName: '',
    value: '',
    placeholder: '',
    img: '',
    validation: () => true
};

export default AuthInput;
