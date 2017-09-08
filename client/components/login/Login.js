import React from 'react';
import PropTypes from 'prop-types';
import normalize from './normalize.css';
import fonts from './fonts.css';
import style from './login.css';

import logo from './cat_logo_128.png';


const Login = (props) => {
    return (
        <div>
            <div className="logo-title">
                <span>CatTube</span>
            </div>
            <img className="cat-logo" alt="" src={logo} />
            <div className="login-wrap">
                <form id="login-form" action="/login" method="POST">
                    <div>
                        <input className="login-input" type="text" name="username" placeholder="Введите логин " required />
                    </div>
                    <div>
                        <input className="password-input" type="text" name="password" placeholder="Введите пароль" required />
                    </div>
                    <button className="button-one">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
};
export default Login;
