import { connect } from 'react-redux';
import Header from '../components/header/Header';
import { tooglePane, closePane } from '../actions/userPane';
import {logout} from '../actions/logout';

const mapStateToProps = ({user, userPane}) => ({
    username: user.username,
    pending: user.pending,
    userPaneIsOpen: userPane.isOpen
});

export default connect(mapStateToProps, {
    tooglePane,
    closePane,
    logout
})(Header);
