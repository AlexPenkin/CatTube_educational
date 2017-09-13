import { connect } from 'react-redux';
import {fetchUser} from '../actions/fetchUser';
import loginFormChange from '../actions/loginFormChange';
import Login from '../components/login/Login';

const mapStateToProps = ({loginForm}, ownProps) => ({
    username: loginForm.username,
    password: loginForm.password,
    inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
    fetchUser,
    loginFormChange
})(Login);
