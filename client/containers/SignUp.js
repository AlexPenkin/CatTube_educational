import { connect } from 'react-redux';
import {fetchUser} from '../actions/fetchUser';
import formChange from '../actions/loginFormChange';
import SignUp from '../pages/signUp/signUp';

const mapStateToProps = ({signUp}, ownProps) => ({
    username: signUp.username,
    password: signUp.password,
    passwordConfirm: signUp.passwordConfirm,
    email: signUp.email,
    inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
    fetchUser,
    formChange
})(SignUp);
