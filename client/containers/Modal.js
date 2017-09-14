import { connect } from 'react-redux';
import loginFormChange from '../actions/loginFormChange';
import Modal from '../components/modalDialog/Modal';

const mapStateToProps = ({ user }) => ({
    isOpen: user.pending
});

export default connect(mapStateToProps, {
})(Modal);
