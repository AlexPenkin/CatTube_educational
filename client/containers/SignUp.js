import { connect } from 'react-redux';
import {createUser} from '../actions/createUser';
import formChange from '../actions/formChange';
import SignUp from '../pages/signUp/signUp';
import { addErrorWithShowning } from '../actions/error';

const mapStateToProps = ({signUp}, ownProps) => ({
    username: signUp.username,
    password: signUp.password,
    passwordConfirm: signUp.passwordConfirm,
    email: signUp.email,
    inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
    createUser,
    formChange: formChange('signUp'),
    addErrorWithShowning
})(SignUp);
