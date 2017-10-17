import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Input from '../../components/authInput/AuthInput';
import styles from './login.css';
import TwoColumns from '../../components/twoColumns/TwoColumns';
import InputImgPassword from '../../images/cat_logo_64.png';

const SignUp = ({username, password, passwordConfirm, email, createUser, formChange}) => 
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
                        validation={value => value >= 3}
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
                        validation={(passwordValue => value => passwordValue === value && value.length >= 6)(passwordConfirm)}
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
                        validation={(passwordValue => value => passwordValue === value && value.length >= 6)(password)}
                        img={InputImgPassword}
                    />
                    <Input
                        name={'email'}
                        type={'email'}
                        className={styles.passwordInput}
                        wrongClassName={styles.passwordInputWrong}
                        value={email}
                        placeholder={'Enter E-mail'}
                        validation={value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)}
                        handler={formChange}
                        postName={'email'}
                        img={InputImgPassword}
                    />
                    <button
                        className={styles.buttonOne}
                        onClick={() => {
                            createUser(username, password, email);
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
    formChange: PropTypes.func.isRequired
};

export default SignUp;
