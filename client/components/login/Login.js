import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './login.css';

// import logo from './cat_logo_128.png';


const Login = ({username, password, fetchUser, loginFormChange}) =>
    (
        <div className={styles.formWrap}>
            <div className={styles.aboutColumn} />
            <div className={styles.slideColumn}>
                <div className={styles.slideItem} />
                <div className={styles.slideItem} />
                <div className={styles.slideItem} />
            </div>
            <div className={styles.loginWrap}>
                <div id={styles.loginForm}>
                    <div>
                        <input
                            className={styles.loginInput}
                            type="text"
                            name="username"
                            placeholder="Enter login"
                            value={username}
                            required
                            onChange={(event) => {
                                loginFormChange('username', event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <input
                            className={styles.passwordInput}
                            type="text"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) => {
                                loginFormChange('password', event.target.value);
                            }}
                            required
                        />
                    </div>
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
