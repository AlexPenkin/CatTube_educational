import { connect } from 'react-redux';
import {fetchUser} from '../actions/fetchUser';
import formChange from '../actions/formChange';
import Login from '../pages/login/Login';

const mapStateToProps = ({loginForm}, ownProps) => ({
    username: loginForm.username,
    password: loginForm.password,
    inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
    fetchUser,
    formChange: formChange('login')
})(Login);
