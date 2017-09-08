import { connect } from 'react-redux';
import { increment, decrement } from '../actions/increment';
import Login from '../components/login/Login';

const mapStateToProps = (state, ownProps) => ({
    user: state.Login,
    inputValue: ownProps.location.pathname.substring(1)
});

export default connect(mapStateToProps, {
    increment,
    decrement
})(Login);
