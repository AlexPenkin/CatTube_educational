import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './login.css';

// import logo from './cat_logo_128.png';


const Login = props =>
    (
        <div className={styles.formWrap}>
            <div className={styles.aboutColumn} />
            <div className={styles.slideColumn}>
                <div className={styles.slideItem} />
                <div className={styles.slideItem} />
                <div className={styles.slideItem} />
            </div>
            <div className={styles.loginWrap}>
                <form id={styles.loginForm} action="/login" method="POST">
                    <div>
                        <input
                            className={styles.loginInput}
                            type="text"
                            name="username"
                            placeholder="Enter login"
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles.passwordInput}
                            type="text"
                            name="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <button className={styles.buttonOne}>
                            Log in
                    </button>
                    <div className={styles.links}>
                        <Link to="/admin" className={styles.remind}>Restore password</Link>
                        <Link to="/signup" className={styles.signup}>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );

Login.PropTypes = {
};
export default Login;
