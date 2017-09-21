import { connect } from 'react-redux';
import ErrorSlide from '../components/errorSlide/ErrorSlide';

const mapStateToProps = ({errors}) => ({
    errorWillBeShow: errors.errorWillBeShow,
    mustShow: errors.mustShow
});

export default connect(mapStateToProps, {})(ErrorSlide);
