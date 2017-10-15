import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Input from '../../components/authInput/AuthInput';
import styles from './login.css';
import TwoColumns from '../../components/twoColumns/TwoColumns';

import inputImgLogin from '../../images/cat_128.png';
import InputImgPassword from '../../images/cat_logo_64.png';


const Login = ({username, password, fetchUser, loginFormChange}) =>
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
                        handler={loginFormChange}
                        postName={'username'}
                        img={inputImgLogin}
                    />
                    <Input
                        name={'password'}
                        type={'text'}
                        className={styles.passwordInput}
                        value={password}
                        placeholder={'Enter password'}
                        handler={loginFormChange}
                        postName={'password'}
                        img={InputImgPassword}
                    />
                    <button
                        className={styles.buttonOne}
                        onClick={() => {
                            fetchUser(username, password);
                        }}
                    >
                            Log in
                    </button>
                    <div className={styles.links}>
                        <Link to="/admin" className={styles.remind}>Restore password</Link>
                        <Link to="/signup" className={styles.signup}>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    fetchUser: PropTypes.func.isRequired,
    loginFormChange: PropTypes.func.isRequired
};

export default Login;
