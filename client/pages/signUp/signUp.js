import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Input from '../../components/authInput/AuthInput';
import styles from './login.css';
import TwoColumns from '../../components/twoColumns/TwoColumns';
import InputImgPassword from '../../images/cat_logo_64.png';

const SignUp = ({username, password, passwordConfirm, email, fetchUser, formChange}) =>
    (
        <div className={styles.formWrap}>
        <TwoColumns />
            <div className={styles.loginWrap}>
                <div id={styles.loginForm}>
                    <Input
                        name={'username'}
                        type={'text'}
                        className={styles.loginInput}
                        value={username}
                        placeholder={'Enter login'}
                        handler={formChange}
                        postName={'username'}
                        img={InputImgPassword}
                    />
                    <Input
                        name={'password'}
                        type={'text'}
                        className={styles.passwordInput}
                        value={password}
                        placeholder={'Enter password'}
                        handler={formChange}
                        postName={'password'}
                        img={InputImgPassword}
                    />
                    <Input
                        name={'passwordConfirm'}
                        type={'text'}
                        className={styles.passwordInput}
                        value={passwordConfirm}
                        placeholder={'Confirm your password'}
                        handler={formChange}
                        postName={'passwordConfirm'}
                        img={InputImgPassword}
                    />
                    <Input
                        name={'email'}
                        type={'email'}
                        className={styles.passwordInput}
                        value={email}
                        placeholder={'Enter E-mail'}
                        handler={formChange}
                        postName={'email'}
                        img={InputImgPassword}
                    />
                    <button
                        className={styles.buttonOne}
                        onClick={() => {
                            fetchUser(username, password);
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
    fetchUser: PropTypes.func.isRequired,
    formChange: PropTypes.func.isRequired
};

export default SignUp;
