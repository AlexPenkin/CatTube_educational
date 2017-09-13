import { connect } from 'react-redux';
import Header from '../components/header/Header';

const mapStateToProps = ({user}) => ({
    username: user.username,
    pending: user.pending
});

export default connect(mapStateToProps, {})(Header);
