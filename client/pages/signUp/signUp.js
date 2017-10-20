import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Input from '../../components/authInput/AuthInput';
import styles from './login.css';
import TwoColumns from '../../components/twoColumns/TwoColumns';
import InputImgPassword from '../../images/cat_logo_64.png';
import makeError from '../../utils/makeError';

const usernameValidation = value => value.length >= 3;
const passwordValidation = passwordValue => value => passwordValue === value && value.length >= 6;
const passwordConfirmValidation = passwordValidation;
const emailValidation = value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);


const SignUp = ({username, password, passwordConfirm, email, createUser, formChange, addErrorWithShowning}) =>
    (
        <div className={styles.formWrap}>
            <TwoColumns />
            <div className={styles.loginWrap}>
                <div id={styles.loginForm}>
                    <Input
                        name={'username'}
                        type={'text'}
                        className={styles.loginInput}
                        wrongClassName={styles.loginInputWrong}
                        value={username}
                        placeholder={'Enter login'}
                        handler={formChange}
                        postName={'username'}
                        img={InputImgPassword}
                        validation={usernameValidation}
                    />
                    <Input
                        name={'password'}
                        type={'password'}
                        className={styles.passwordInput}
                        wrongClassName={styles.passwordInputWrong}
                        value={password}
                        placeholder={'Enter password'}
                        handler={formChange}
                        postName={'password'}
                        validation={passwordValidation(passwordConfirm)}
                        img={InputImgPassword}
                    />
                    <Input
                        name={'passwordConfirm'}
                        type={'password'}
                        className={styles.passwordInput}
                        wrongClassName={styles.passwordInputWrong}
                        value={passwordConfirm}
                        placeholder={'Confirm your password'}
                        handler={formChange}
                        postName={'passwordConfirm'}
                        validation={passwordConfirmValidation(password)}
                        img={InputImgPassword}
                    />
                    <Input
                        name={'email'}
                        type={'email'}
                        className={styles.passwordInput}
                        wrongClassName={styles.passwordInputWrong}
                        value={email}
                        placeholder={'Enter E-mail'}
                        validation={emailValidation}
                        handler={formChange}
                        postName={'email'}
                        img={InputImgPassword}
                    />
                    <button
                        className={styles.buttonOne}
                        onClick={() => {
                            if (
                                usernameValidation(username) &&
                                passwordValidation(passwordConfirm)(password) &&
                                passwordConfirmValidation(password)(passwordConfirm) &&
                                emailValidation(email)
                            ) {
                                createUser(username, password, email);
                            } else {
                                const error = makeError('Not valid', 'Fields that marked red, must be filled properly');
                                addErrorWithShowning(error);
                            }
                        }}
                    >
                            Sign Up
                    </button>
                    <div className={styles.links}>
                        <Link to="/admin" className={styles.remind}>Restore password</Link>
                        <Link to="/login" className={styles.signup}>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );

SignUp.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    createUser: PropTypes.func.isRequired,
    formChange: PropTypes.func.isRequired,
    addErrorWithShowning: PropTypes.func.isRequired
};

export default SignUp;
