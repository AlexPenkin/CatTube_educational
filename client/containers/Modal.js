import { connect } from 'react-redux';
import loginFormChange from '../actions/loginFormChange';
import Modal from '../components/modalDialog/Modal';

const mapStateToProps = ({ errors }) => ({
    isOpen: false
});

export default connect(mapStateToProps, {
})(Modal);
