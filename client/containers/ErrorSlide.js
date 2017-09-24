import { connect } from 'react-redux';
import ErrorSlide from '../components/errorSlide/ErrorSlideGroup';
import { setErrorShown } from '../actions/error';

const mapStateToProps = ({errors}) => ({
    errorsWillBeShow: errors.errorsWillBeShow
});

export default connect(mapStateToProps, {
    setErrorShown
})(ErrorSlide);
